import express from 'express';
import { getEnrolledCourses, getCourseInstructors, getSections } from '../controllers/course';
const router = express.Router();

router.get('/enrolled', getEnrolledCourses)
    .get('/:course_id/instructors', getCourseInstructors)
    .get('/:course_id/sections', getSections)

export default router;