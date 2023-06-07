// imports
import mongoose from "mongoose";

// otp model schema
const otpSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    otp: { type: String, required: true },
  },
  { timestamps: true }
);

// otp model
export const OtpModel = mongoose.model("otp", otpSchema);
