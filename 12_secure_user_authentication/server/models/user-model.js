const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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


  //define the model or the collection name
  const User = new mongoose.model("User",userSchema);
  module.exports = User;