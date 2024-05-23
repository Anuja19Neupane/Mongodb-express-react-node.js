// express is a web application framework for Node.js.
// to run this we can write following commands in terminal: 1. node server.js 2. npm run start 
const express = require("express"); 
const app = express(); 

// main page
app.get("/" , (req, res) => {
    res.status(200).send("Welcome to the amazing world!");  
});

// registration page
app.get("/register" , (req, res) => {
    res.status(200).send("Welcome to registration page!");  
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
console.log(`server is running at port: ${PORT}`);
});