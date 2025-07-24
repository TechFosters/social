import express from 'express'

const app = express();

//req,res, next is given to us by express they are parameter to express route handler
app.use('/user', (req, res,next)=>{
    // console.log(req.body)
    res.send("Hello from route handler1") //as this runs
    console.log("Hello from route handler1") //logs
    next(); //this will pass the flow to next request
},
(req,res)=>{
    console.log("Hello from route handler2") //logs
    res.send("Hello from route handler2") //since the response is already sent earlier from route handler1 it won't work: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

})

//creating the server
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})

