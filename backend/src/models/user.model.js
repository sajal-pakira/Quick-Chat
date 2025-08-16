import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: [true, "Email should be unique"],
      required: [true, "Email is required"],
    },
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Minumun password length should be 6"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
