import express from 'express'
import { createDbConnection } from './config/database.js';
import { User } from './models/user.js';
import { validateSignUpData } from './utils/validation.js';

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
    //
    const user = new User(req.body)

    try{
    validateSignUpData(req)
    await user.save()
    res.status(201).send("user added successfully")
    }catch(err){
        res.status(400).send("error while adding user to DB: "+ err.message)
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

app.patch('/user/:id', async(req,res)=>{
    console.log("This is req.params", req.params)
    const userId = req.params?.id
    const data = req.body
    try{
        const allowedUpdates = ['photoURL','age','gender','password', 'about']
        const isUpdateAllowed = Object.keys(data).every((k)=>allowedUpdates.includes(k))
        if(!isUpdateAllowed){
            throw new Error("this field can't be updated")
        }
    const updatedUser= await User.findByIdAndUpdate({_id: userId}, data ,{returnDocument:"before"})
    console.log(updatedUser)
    res.send("user updated successfully")
    }catch(err){
        res.status(404).send("Something went wrong while updation"+ err.message)
    }

})

// app.patch('/user', async(req,res)=>{
//     const email = req.body.emailId
//     const data = req.body

   
//     try{
//          //API LEVEL VALIDATION

//     // const allowedUpdates = ['photoURL', 'about', 'password', 'age', 'gender']

//     // const isUpdateAllowed = Object.keys(data).every((k)=>allowedUpdates.includes(k))

//     // if(!isUpdateAllowed){
//     //   throw new Error("This field can't be updated")
//     // }
//         const user = await User.findOneAndUpdate({emailId: email}, data)
//         console.log(user)
//         res.status(201).send('User updated sucessfully')
//     }catch(err){
//         res.status(400).send('No user found with the above id'+err.message)
//     }
// })