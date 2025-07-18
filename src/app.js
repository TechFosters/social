import express from 'express'

const app = express();

//request handler
app.get("/",(req, res)=>{
    res.send("this is the dashboard")
})
//request handler via route
app.use("/hello", (req,res)=>{
    res.send("Hello, Helloo, Helllooo")
})
//creating the server
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})

