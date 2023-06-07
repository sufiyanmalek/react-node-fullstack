// imports
import express from "express";
import { addUser } from "../Controllers/addUserController.js";
import { getUsers } from "../Controllers/getUserController.js";
import { deleteUser } from "../Controllers/deleteUserController.js";
import { editUser } from "../Controllers/editUserController.js";

// manage user router
export const manageUsersRouter = express.Router();

// add user route
manageUsersRouter.post("/addUser", addUser);

//get all users
manageUsersRouter.get("/users", getUsers);

//delete user
manageUsersRouter.delete("/user", deleteUser);

//edit user
manageUsersRouter.put("/user", editUser);
