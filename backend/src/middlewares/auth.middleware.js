import jwt from "jsonwebtoken";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - no token provided",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {}
};
