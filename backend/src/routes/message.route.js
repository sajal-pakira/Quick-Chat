import express from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { getMessage, getUsersForSideBar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectedRoute, getUsersForSideBar);
router.get("/:id", protectedRoute, getMessage);
router.get("/send/:id", protectedRoute, sendMessage);

export default router;
