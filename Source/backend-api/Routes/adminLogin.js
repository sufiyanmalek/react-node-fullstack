// imports
import express from "express";
import { loginAdmin } from "../Controllers/loginAdminController.js";

// login admin router
export const loginAdminRouter = express.Router();

loginAdminRouter.post("/admin/login", loginAdmin);
