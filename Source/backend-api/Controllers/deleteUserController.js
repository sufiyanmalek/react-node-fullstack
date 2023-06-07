//imports

import { UserCreds } from "../Models/userCredentialsModel.js";
import { User } from "../Models/userModel.js";

// delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.body._id);
    if (user) {
      const userCreds = await UserCreds.findOneAndDelete({
        User: user._id,
      });

      res.status(200).send(user);
    } else {
      res.status(404).send("No user found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
