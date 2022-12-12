import express from 'express';
import { getEnrolledCourses, getCourseInstructors, getSections } from '../controllers/course';
const router = express.Router();

router.get('/enrolled', getEnrolledCourses as any)
    .get('/:course_id/instructors', getCourseInstructors as any)
    .get('/:course_id/sections', getSections as any)

export default router;