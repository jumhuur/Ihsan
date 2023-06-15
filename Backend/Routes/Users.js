const express = require("express");
const UserRoutes = express.Router();
const { Login, Register, UsersCount } = require("../controllers/Users");

// Login
UserRoutes.post("/Login", Login);

// sing up

UserRoutes.post("/Register", Register);

// get count users

UserRoutes.get("/UserCounts", UsersCount);

module.exports = UserRoutes;
