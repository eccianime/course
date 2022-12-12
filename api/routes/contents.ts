import express from 'express';
import { addCompletedContent } from '../controllers/content';
const router = express.Router();

router.post('/users', addCompletedContent as any)

export default router;