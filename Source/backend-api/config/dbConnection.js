// imports
import mongoose from "mongoose";

// Connect To MongoDB
export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/SpiritualCenter")
    .then(() => {
      console.log("DB Connection Successfull..");
    })
    .catch((e) => console.log(e));
};
