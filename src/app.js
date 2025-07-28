import express from 'express'
import { createDbConnection } from './config/database.js';
import { User } from './models/user.js';

const app = express();

createDbConnection().then(()=>{

    console.log("DB connection successful")
    app.listen(3000,()=>{
        console.log("server is up and running")
    })  
}).catch((err)=>{
    console.log("error connection db", err)
})

app.use(express.json())
//get users by email

app.get('/user', async (req,res)=>{
    //pick the email from request
    const email = req.body.emailId

    try{
        const user = await User.findOne({emailId: email})
        if(!user){
            res.send('user not found')
        }else{
            res.send(user)
        }
    }catch(err){
        res.status(404).send('something went wrong')
    }

//     try{
//     const users = await User.find({emailId: email})
//     console.log(users)

//     if(users.length===0){
//         res.status(404).send("No user found with this email")
//     }else{
//         res.status(201).send(users)
//     }
// }catch(err){
//     res.send("User not found")
// }
})

app.get('/feed', async(req,res)=>{
    try{
        const users = await User.find({})
        if(users.length > 0){
            res.status(201).send(users)
        }else{
            res.status(404).send("Nothing to show here")
        }

    }catch(err){
        res.send("Error fetching the feed")
    }
})
app.post('/signup', async (req,res)=>{
   console.log("This is req.body: ", req.body)

    const user = new User(req.body)

    try{
    await user.save()
    res.status(201).send("user added successfully")
    }catch(err){
        res.status(400).send("error while adding user to DB: ", err.message)
    }
})

//delete user

app.delete('/user', async(req,res)=>{
    const userId = req.body._id
    try{
        const deletedUser = await User.findByIdAndDelete(userId)
        res.send(deletedUser)
    }catch(err){
        res.status(404).send("Error deleting the user" + err.message)
    }
})

//patch user

// app.patch('/user', async(req,res)=>{
//     const userId = req.body.userId
//     try{
//     const updatedUser= await User.findByIdAndUpdate({_id: userId},{firstName: 'KashiNath', lastName: 'Ghatak'},{returnDocument:"before"})
//     console.log(updatedUser)
//     res.send("user updated successfully")
//     }catch(err){
//         res.status(404).send("Something went wrong while updation"+err.message)
//     }

// })

app.patch('/user', async(req,res)=>{
    const email = req.body.emailId

    try{
        const user = await User.findOneAndUpdate({emailId: email}, {firstName: 'Vijay', lastName: 'Kumar'})
        console.log(user)
        res.status(201).send('User updated sucessfully')
    }catch(err){
        res.status(400).send('No user found with the above id'+err.message)
    }
})