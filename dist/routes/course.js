"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_1 = require("../controllers/course");
const router = express_1.default.Router();
router.get('/enrolled', course_1.getEnrolledCourses)
    .get('/:course_id/instructors', course_1.getCourseInstructors)
    .get('/:course_id/sections', course_1.getSections);
exports.default = router;
