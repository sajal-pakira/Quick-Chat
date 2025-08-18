import cloudinary from "../lib/cloudinary.js";

export const updateProfile = async (req, res) => {
  try {
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
      req.user.profilePic = (await uploadResponse).secure_url;
    }

    res.status(200).json({
      message: "Profile updated successfully",
      updatedUser: req.user,
      success: true,
    });
  } catch (error) {
    console.log("Error in updateProfile controller :- ", error.message);
    res.status(500).json({
      message: `${error.message}`,
      success: false,
    });
  }
};
