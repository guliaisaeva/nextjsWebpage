import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
  title: string;
  desc: string;
  image: string;
  content: string;
  username: string;
}

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);

export default Post;
