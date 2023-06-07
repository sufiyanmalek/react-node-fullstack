//imports

import { Admin } from "../Models/adminModel.js";

// admin login
export const loginAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ adminId: req.body.adminId });
    if (admin) {
      if (admin.adminPassword == req.body.adminPassword) {
        res.status(200).send("login success");
      } else {
        res.status(401).send("inncorrect password");
      }
    } else {
      res.status(404).send("No admin with this adminId");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
