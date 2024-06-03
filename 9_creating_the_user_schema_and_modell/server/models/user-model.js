const mongoose = require("mongoose");

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
  //define the model or the collection name
  const User = new mongoose.model("User",userSchema);
  module.exports = User;