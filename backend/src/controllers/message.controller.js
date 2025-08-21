import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSideBar controller :- ", error.message);
    req.status(500).json({
      message: `${error.message}`,
      success: false,
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatUserId } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        { receiverId: myId, senderId: chatUserId },
        { receiverId: chatUserId, senderId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage controller :- ", error.message);
    res.status(500).json({
      message: `${error.message}`,
      success: false,
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { image, text } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let imageUrl;
    if (image) {
      uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      image: imageUrl,
      text,
    });
  } catch (error) {}
};
