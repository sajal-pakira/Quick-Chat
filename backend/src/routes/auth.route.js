import express from "express";

import {
  checkAuth,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/check", protectedRoute, checkAuth);

export default router;
