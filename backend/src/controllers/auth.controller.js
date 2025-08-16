import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { email, fullName, password, profilePic } = req.body;
  try {
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
        success: false,
      });
    }
    const user = await User.find({ email });
    if (user) {
      return res.status(400).json({
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
      profilePic,
    });
    //jwt creation
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        message: "New User created successfully!!",
        success: true,
        user: {
          _id: newUser._id,
          email: newUser.email,
          fullName: newUser.fullName,
          profilePic: newUser.profilePic,
        },
      });
    } else {
      res.status(400).json({
        message: "User data not found!",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to signup! Please try again!",
      success: false,
    });
    console.log("Error in signup function :- ", error.message);
  }
};
export const login = async (req, res) => {};
export const logout = async (req, res) => {};
