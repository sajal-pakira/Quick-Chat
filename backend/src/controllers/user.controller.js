import cloudinary from "../lib/cloudinary.js";

export const updateProfile = async (req, res) => {
  const { fullName, profilePic } = req.body;
  if (!fullName && !profilePic) {
    return res.status(400).json({
      message: "Any one field is required to update profile",
      success: false,
    });
  }
  if (fullName) req.user.fullName = fullName;

  if (profilePic) {
    const uploadResponse = cloudinary.uploader.upload(profilePic);
  }
};
