import express from "express";
import authRouter from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user",)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
