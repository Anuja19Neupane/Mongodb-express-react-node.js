const mongoose = require("mongoose");

// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("sucessfully connected to database")
    }
    catch(error) {
        console.error("database connection failed!!");
        console.log(error)
        process.exit(0);
    }
}

module.exports = connectDb;