const express = require("express");
const router = express.Router();

// main page
// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to the amazing world!");
// });
// this can be done as:
router.route("/").get((req,res) =>{
    res.status(200).send("Welcome to the amazing world!");
})

// // registration page
// app.get("/register" , (req, res) => {
//     res.status(200).send("Welcome to registration page!");  
// });
router.route("/register").get((req,res) =>{
    res.status(200).send("Welcome to the registration page!");
}) // http://localhost:5000/api/auth/register

module.exports = router;