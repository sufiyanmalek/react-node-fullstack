import { OtpModel } from "../Models/otpModel.js";
import { UserCreds } from "../Models/userCredentialsModel.js";

export const verifyOtp = async (req, res) => {
  try {
    const { userId, otp } = req.body;
    const userOtp = await OtpModel.findOne({ userId: userId });
    const user = await UserCreds.findOne({ userId: userId }).populate("User");

    if (userOtp) {
      if (userOtp.otp === otp) {
        setTimeout(async () => {
          const deleteOtp = await OtpModel.findByIdAndDelete(userOtp._id);
        }, 3000);

        console.log(user);
        res.status(200).json({
          message: "otp Verified",
          user: user,
        });
      } else {
        res.status(401).send("Incorrect Otp please check ");
      }
    } else {
      res.status(404).send("User Otp Expired generate new one");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
