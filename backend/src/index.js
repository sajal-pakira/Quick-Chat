import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
