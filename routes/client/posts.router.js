import express from "express";
const router = express.Router();
import * as blogController from '../../controllers/blog.controller.js';
import { authenticate } from '../../middleware/auth.middleware.js';

router.get("/all", blogController.allPost);
router.get("/", blogController.index);
router.get("/:id", blogController.getSinglePost);
router.post("/", blogController.create);
router.put("/:id", blogController.edit);
router.delete("/:id", blogController.destroy);

export default router;
