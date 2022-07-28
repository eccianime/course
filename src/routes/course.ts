import express from 'express';
import { getEnrolledCourses } from '../controllers/course';
const router = express.Router();

router.post('/enrolled', getEnrolledCourses);

export default router;