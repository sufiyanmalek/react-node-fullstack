// imports
import mongoose, { mongo } from "mongoose";

// user credentails schema
const userCredentailsSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  password: { type: String, required: true },
  User: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

// user credetials model
export const UserCreds = mongoose.model("userCreds", userCredentailsSchema);
