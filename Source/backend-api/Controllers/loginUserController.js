import { UserCreds } from "../Models/userCredentialsModel.js";
import bcrypt from "bcrypt";
import { otpMailer } from "../utils/otpMailer.js";
import { OtpModel } from "../Models/otpModel.js";

// login user controller
export const loginUser = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await UserCreds.findOne({ userId: userId }).populate("User");
    if (user) {
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (verifyPassword) {
        const otp = Math.floor(Math.random() * 1000000 + 1);
        otpMailer(user.User.emailId, otp);
        const otps = await OtpModel.deleteMany({ userId: user.userId });
        const userOtp = new OtpModel({
          userId,
          otp: otp.toString(),
        });
        await userOtp.save();
        setTimeout(async () => {
          const deleteOtp = await OtpModel.findByIdAndDelete(userOtp._id);
        }, 45000);
        res.status(200).json({ message: "login Successfull", user });
      } else {
        res.status(401).send("incorrect password please check");
      }
    } else {
      res.status(404).send("User Doesn't Exist");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
