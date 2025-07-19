import express from 'express'

const app = express();

//order of the route matters
// app.use("/user",(req,res)=>{
//     res.send({
//         success: true,
//         message: "this is app.use()"
//     })
// })

//GET REQUEST
app.get("/user", (req, res)=>{
    res.send({
        sucess: true,
        message: "this is a GET request"
    })
})
//POST REQUEST
app.post("/user",(req, res)=>{
   res.send({
    sucess: true,
    message: "this is a POST request"
   })
})
//DELETE REQUEST
app.delete("/user",(req, res)=>{
    res.send({
        success: true,
        message: "this is a DELETE request"
    })
})

//creating the server
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})

