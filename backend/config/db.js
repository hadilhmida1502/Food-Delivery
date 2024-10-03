import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://HadilHmida:IWillDoItRIC@cluster0.p8uslt4.mongodb.net/POS-app').then(()=>console.log("DB Connected"));
}