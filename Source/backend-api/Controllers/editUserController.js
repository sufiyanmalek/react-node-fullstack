//imports

import { User } from "../Models/userModel.js";

// edit User
export const editUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).send(updatedUser);
    } else {
      res.send("Something Went Wrong");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
