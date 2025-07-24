import express from 'express'

const app = express();

//req,res, next is given to us by express they are parameter to express route handler
app.use('/user', (req, res,next)=>{
    next(); //this will pass the flow to next request that os route handler2
    // console.log(req.body)
    console.log("Hello from route handler1") //logs
    res.send("Hello from route handler1") //since the response is already sent earlier from route handler2 it won't work: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

   
   
},
(req,res)=>{
    console.log("Hello from route handler2") //logs
    res.send("Hello from route handler2") //request to /user is fulfilled via this response
})

//creating the server
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})

