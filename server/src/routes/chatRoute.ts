import express from "express"

import { chatController } from "../controllers/chatController.ts";

const router = express.Router();

router.post('/chat', chatController);

export default router;