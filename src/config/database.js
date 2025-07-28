import mongoose from "mongoose";

export const createDbConnection = async () =>{
   await mongoose.connect('mongodb+srv://admin:admin%4088@cluster001.mcwinax.mongodb.net/social')
}

