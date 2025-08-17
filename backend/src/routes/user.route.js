import express from "express";
import { updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.put("/profile", updateProfile);

export default router;
