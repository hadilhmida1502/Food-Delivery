import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

//if the model is created; it will be used, if the model is not created; it will be created
const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;