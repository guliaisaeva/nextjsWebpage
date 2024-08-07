// import mongoose, { Document, Model, Schema } from "mongoose";

// export interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
// }

// const userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const UserModel: Model<IUser> =
//   mongoose.models.User || mongoose.model<IUser>("User", userSchema);

// export default UserModel;

import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);
