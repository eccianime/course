"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSections = exports.getCourseInstructors = exports.getEnrolledCourses = void 0;
const dbConnection_1 = __importDefault(require("../config/dbConnection"));
const async_1 = __importDefault(require("../middleware/async"));
const models_1 = require("../models");
const errorResponse_1 = __importDefault(require("../utils/errorResponse"));
exports.getEnrolledCourses = (0, async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, limit, course_id } = req.query;
    if (!user_id)
        return next(new errorResponse_1.default('Deve especificar do qual usuário deseja ver os Cursos.', 400));
    const [results] = yield dbConnection_1.default.query(`
        select c.*, a.watched, count(co.*) total
        from courses c
        join enrolls e on e.course_id = c.id
        join sections s on s.course_id = c.id
        join contents co on co.section_id = s.id
        join (
            select c.id as anotherId, count(cu.*) as watched from courses c
            join enrolls e on e.course_id = c.id
            join sections s on s.course_id = c.id
            join contents co on co.section_id = s.id
            join contents_users cu on cu.content_id = co.id
            where e.user_id = ${user_id} and cu.user_id = ${user_id}
            group by c.id
        ) as a on a.anotherId = c.id
        where e.user_id = ${user_id} ${course_id ? `and c.id = ${course_id}` : ''}
        group by c.id, a.watched
        ${limit ? `LIMIT ${limit}` : ''}
        `);
    res.status(200).json({
        success: true,
        data: results
    });
}));
exports.getCourseInstructors = (0, async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { course_id } = req.params;
    const instructors = yield models_1.Instructor.findAll({
        include: [{ model: models_1.Course, required: true, where: { id: course_id } }]
    });
    res.status(200).json({
        success: true,
        data: instructors,
    });
}));
exports.getSections = (0, async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { course_id } = req.params;
    const { user_id } = req.query;
    const sections = yield models_1.Section.findAll({
        where: { course_id },
        include: [{ model: models_1.Content, required: true }]
    });
    if (user_id) {
        const watchedContents = yield models_1.Content.findAll({
            include: [
                { model: models_1.Section, required: true, where: { course_id } },
                { model: models_1.ContentsUsers, required: true, where: { user_id } }
            ]
        });
        sections.forEach(section => {
            section.contents.forEach(content => {
                const isCompleted = watchedContents.some(wc => wc.get('contents_users').some((cu) => cu.content_id === content.id));
                content.dataValues.isCompleted = isCompleted;
            });
        });
    }
    res.status(200).json({
        success: true,
        data: sections,
    });
}));
