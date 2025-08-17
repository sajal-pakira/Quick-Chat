import express from "express";
import { updateProfile } from "../controllers/user.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.put("/profile",protectedRoute, updateProfile);

export default router;
