const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


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

        // // hash the password to dcrypt
        // const saltRound = 10;
        // const hash_pasword = await bcrypt.hash(password,saltRound);

        // let user = new User({ username, email, contact_no, password:hash_pasword });
        let user = new User({ username, email, contact_no, password });

        const userCreated = await user.save(); // user is document



        res.status(200).json({
            msg: "registration sucessful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),

        });
    }
    catch (error) {
        res.status(500).json("internal server error")
    }
}

//login page
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const user = await bcrypt.compare(password, userExist.password);
        if (user) { // if user is found
            res.status(201).json({
                msg: "login sucessful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else {
            res.status(401).json({message: "Invalid email or password"});
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
    
};

module.exports = { home, register,login};