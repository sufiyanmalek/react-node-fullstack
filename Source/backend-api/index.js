// imports
import express from "express";
import { connectDB } from "./config/dbConnection.js";
import { manageUsersRouter } from "./Routes/manageUsers.js";
import { loginAdminRouter } from "./Routes/adminLogin.js";
import cors from "cors";
import { userLoginRouter } from "./Routes/loginUser.js";

// initiate app
const app = express();

// express json middleware
app.use(express.json());

// allow requests
app.use(cors("*"));

// database connection
connectDB();

// user management router that will only be used by admin
app.use(manageUsersRouter);

// admin login
app.use(loginAdminRouter);

// user login
app.use(userLoginRouter);

// listen to port
const Port = 3000;
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
