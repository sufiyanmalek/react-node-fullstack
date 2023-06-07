//imports
import express from "express";
import { loginUser } from "../Controllers/loginUserController.js";
import { verifyOtp } from "../Controllers/verifyOtpController.js";

// user login router
export const userLoginRouter = express.Router();

// login request
userLoginRouter.post("/user/login", loginUser);

//otp verify request
userLoginRouter.post("/user/verify", verifyOtp);
