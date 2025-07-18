import express from "express";
const router = express.Router();
import * as userController from '../../controllers/user.controller.js';
import { authenticate } from '../../middleware/auth.middleware.js';

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", authenticate, userController.logout);


export default router;
