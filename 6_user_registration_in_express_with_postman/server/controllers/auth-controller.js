// home page
const home = async(req, res) => { // to use try, catch : we should write async
    try {
        res.status(200).send({message: "Welcome to the amazing world!"});
    }
    catch (error) {
        console.log(error);
    }
};

// registration page
const register = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({message:req.body});
    }
    catch (error){
        res.status(500).json("internal server error")
    }
}

module.exports = {home, register};