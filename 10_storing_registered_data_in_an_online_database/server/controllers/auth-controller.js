const User = require("../models/user-model");

// home page
const home = async (req, res) => { // to use try, catch : we should write async
    try {
        res.status(200).send({ message: "Welcome to the amazing world!" });
    }
    catch (error) {
        console.log(error);
    }
};

// registration page
const register = async (req, res) => {
    try {
        
        const { username, email, contact_no, password } = req.body;

        const userExit = await User.findOne({ email: email }); // to use findone we should await, User is model
        if (userExit) {
            return res.status(400).json({ msg: "email already exists" })
        }

        let user = new User({ username, email, contact_no, password });

        await user.save(); // user is document

        const data = req.body;
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(500).json("internal server error")
    }
}

module.exports = { home, register };