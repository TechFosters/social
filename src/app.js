import express from 'express'

const app = express();

//request handler: it handles all the request starting with / ex: /hello, /xyz

app.use("/",(req, res)=>{
    res.send("this is the dashboard")
})
//request handler via route : it handles att the request starting witj /hello ex /hello/v1
app.use("/hello", (req,res)=>{
    res.send("Hello, Helloo, Helllooo")
})

app.use("/test", (req,res)=>{
    res.send("test, test, test")
})


//creating the server
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})

