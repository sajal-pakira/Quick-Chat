import User from "../models/user.model";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { email, fullName, password, profilePic } = req.body;
  try {
    if (password.length < 6) {
      return req.status(400).json({
        message: "Password must be at least 6 characters",
        success: false,
      });
    }
    const user = await User.find({ email });
    if (user) {
      return req.status(400).json({
        message: "Email already exists, Please Login",
        success: false,
      });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      fullName,
      password: hashedPassword,
    });
  } catch (error) {}
};
export const login = async (req, res) => {};
export const logout = async (req, res) => {};
