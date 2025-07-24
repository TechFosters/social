import express from 'express'

const app = express();

app.use('/user', (req, res)=>{
    // console.log(req.body)
    res.send("Hello from route handler1") //as this runs
    console.log(req)
},
(req,res)=>{
    res.send("Hello from route handler2") //this won't be processed automatically 

})

//creating the server
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})

