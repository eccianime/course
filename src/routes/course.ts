import express from 'express';
import { getEnrolledCourses } from '../controllers/course';
const router = express.Router();

router.get('/enrolled', getEnrolledCourses);

export default router;