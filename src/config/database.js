import mongoose from "mongoose";

export const createDbConnection = async () =>{
   await mongoose.connect('mongodb+srv://admin:admin%4088@cluster001.mcwinax.mongodb.net/social')
}

createDbConnection().then(()=>{
    console.log("DB connection successfull")
}).catch((err)=>{
    console.log("Error connecting DB", err)
})
