// imports
import mongoose from "mongoose";

// user Schema
const userSchema = new mongoose.Schema({
  fullName: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  photo: { type: String, required: true },
  address: {
    flatNumber: { type: Number, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  emailId: { type: String, required: true },
  initiationDate: { type: Date, required: true },
});

// user Model
export const User = mongoose.model("user", userSchema);
