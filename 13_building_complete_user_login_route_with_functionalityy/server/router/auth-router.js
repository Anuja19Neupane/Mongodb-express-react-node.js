const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// main page
// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to the amazing world!");
// });
// this can be done as:
// router.route("/").get((req,res) =>{
//     res.status(200).send("Welcome to the amazing world!");
// })
router.route("/").get(authcontrollers.home);

// // registration page
// app.get("/register" , (req, res) => {
//     res.status(200).send("Welcome to registration page!");  
// });
router.route("/register").post(authcontrollers.register); // http://localhost:5000/api/auth/register
router.route("/login").post(authcontrollers.login);

module.exports = router;