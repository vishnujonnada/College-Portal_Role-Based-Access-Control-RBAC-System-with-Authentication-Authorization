const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    mobilenumber:String,
    password:String,
    confirmPassword:String
})

module.exports=mongoose.model("Userinfo",userSchema);
