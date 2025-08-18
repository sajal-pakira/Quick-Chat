import express from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/users",protectedRoute)

export default router;
