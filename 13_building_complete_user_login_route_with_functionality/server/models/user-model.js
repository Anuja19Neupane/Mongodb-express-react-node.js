const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
     username: {
        type: String,
        require: true, // username can't be blank
     },
     email: {
        type: String,
        require: true, // email can't be blank
     },
     contact_no: {
        type: String,
        require: true, // contact_no can't be blank
     },
     password: {
        type: String,
        require: true, // password can't be blank
     },
     is_admin: {
        type:Boolean,
        default:false,
     },     

})

   // Secure the password using bcrypt
userSchema.pre('save', async function(next) { // Before saving, encrypt the password
   try {
       const user = this;

       if (!user.isModified("password")) { // Check if the password is modified
           return next(); // If not modified, move to the next middleware
       }

       const saltRound = await bcrypt.genSalt(10); // Generate salt for hashing
       const hashPassword = await bcrypt.hash(user.password, saltRound); // Hash the password
       user.password = hashPassword; // Replace plain password with hashed password
       
       next(); // Move to the next middleware or operation
   } catch (error) {
       next(error); // Pass any error to the next middleware
   }
});

//json web token
userSchema.methods.generateToken = async function(){
   try {
      return jwt.sign({
         userId:this._id.toString(),
         email: this.email,
         is_admin: this.is_admin,
      },
      process.env.JWT_SELECT_KEY,
      {
         expiresIn:"30d", // expires in  30 days
      }
      );
   }
   catch (error){
      console.log(error);
   }
};

  //define the model or the collection name
  const User = new mongoose.model("User",userSchema);
  module.exports = User;