// express is a web application framework for Node.js.
// to run this we can write following commands in terminal: 1. node server.js 2. npm run start 
const express = require("express"); 
const app = express(); 
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

// middleware so that we can use json in this application
app.use(express.json());

app.use("/api/auth" , router);



// start server
const PORT = 5000;

connectDb().then (() => { // after connectDb do this
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
        });
})