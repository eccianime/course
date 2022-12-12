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
exports.addCompletedContent = void 0;
const models_1 = require("../models");
const errorResponse_1 = __importDefault(require("../utils/errorResponse"));
const addCompletedContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, content_id } = req.body;
    if (!user_id || !content_id)
        return next(new errorResponse_1.default('Deve especificar do qual usuário e qual conteúdo deseja incluir.', 400));
    const duplicate = yield models_1.ContentsUsers.findAll({
        where: { user_id, content_id }
    });
    if (duplicate.length) {
        return next(new errorResponse_1.default('Este usuário ja assistiu este conteúdo', 400));
    }
    else {
        const targetCourse = yield models_1.Section.findOne({
            include: [
                { model: models_1.Content, required: true, where: { id: content_id } }
            ]
        });
        try {
            yield models_1.ContentsUsers.create({
                user_id, content_id
            });
            res.status(200).json({
                success: true,
                course_id: targetCourse === null || targetCourse === void 0 ? void 0 : targetCourse.get('course_id')
            });
        }
        catch (error) {
            res.status(200).json({
                success: false,
                message: error.name,
                course_id: targetCourse === null || targetCourse === void 0 ? void 0 : targetCourse.get('course_id')
            });
        }
    }
});
exports.addCompletedContent = addCompletedContent;
