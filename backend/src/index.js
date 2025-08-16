import express from "express";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
