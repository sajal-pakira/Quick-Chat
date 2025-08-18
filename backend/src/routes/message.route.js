import express from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { getMessage, getUsersForSideBar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectedRoute, getUsersForSideBar);
router.get("/:id", protectedRoute, getMessage);

export default router;
