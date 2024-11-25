const mongoose=require('mongoose')
const adminSchema=new mongoose.Schema({
    email:String,
    id:String,
    password:String,
    confirmPassword:String
})

module.exports=mongoose.model('adminDetails',adminSchema);
