// express is a web application framework for Node.js.
// to run this we can write following commands in terminal: 1. node server.js 2. npm run start 
const express = require("express"); 
const app = express(); 
const router = require("./router/auth-router");

app.use("/api/auth" , router);



// start server
const PORT = 5000;
app.listen(PORT, () => {
console.log(`server is running at port: ${PORT}`);
});