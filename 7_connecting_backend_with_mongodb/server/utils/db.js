const mongoose = require("mongoose");

// mongoose.connect(URI);

const URI = "mongodb://127.0.0.1:27017/mern_admin";

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("sucessfully connected to database")
    }
    catch(error) {
        console.error("database connection failed!!");
        process.exit(0);
    }
}

module.exports = connectDb;