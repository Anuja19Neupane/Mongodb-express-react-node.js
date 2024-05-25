// home page
const home = async(req, res) => { // to use try, catch : we should write async
    try {
        res.status(200).send("Welcome to the amazing world!");
    }
    catch (error) {
        console.log(error);
    }
};

// registration page
const register = async (req, res) => {
    try {
        res.status(200).send("Welcome to the registration page!")
    }

    catch (error){
        res.status(400).send({msg: "page not found!!!"})
    }
}

module.exports = {home, register};