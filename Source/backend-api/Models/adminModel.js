// imports
import mongoose from "mongoose";

// Admin Schema
const adminSchema = new mongoose.Schema({
  adminId: { type: String, required: true },
  adminPassword: { type: String, required: true },
});

// Admin Model
export const Admin = mongoose.model("admin", adminSchema);
