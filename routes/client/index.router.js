import express from 'express';
const router = express.Router();
import postsRouter from './posts.router.js';
import userRouter from './user.router.js';
import * as authMiddleware from '../../middleware/auth.middleware.js';
import flash from "connect-flash";
import { authenticate } from '../../middleware/auth.middleware.js';

router.use('/auth', userRouter);

router.use('/posts', authenticate, postsRouter);

export default router;
