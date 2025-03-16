import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: {
      type: String,
      ref: "Message",
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Conversation", conversationSchema);

export default Message;
