import express from 'express'

const app = express();

//? means b is optional it works for /abc and /ac
app.get(/^\/a(b)?c$/, (req, res) => {
    res.send({ message: "this is a(b)?c" });
});

// q+ means any number of qs between p and r
app.get(/^\/pq+r$/,(req,res)=>{
    res.send({message: "this is for pq+r"})
})

// anything (any characters) can come between he and ld.
app.get(/^\/he.*ld$/,(req,res)=>{
    res.send({message: "this is for he*ld"})
})

app.get(/a/, (req,res)=>{
    res.send({message: "this is for/a/ that is it workd for any route that contains a"})
})

app.get(/.*dev$/, (req,res)=>{
    res.send({message: "this is for anything that ends with dev"})
})

/*dynamic route
:id and :name are URL segments, treated as variables.
You access them via req.params.

💁🏻Example:
GET http://localhost:3000/user/42/akshit

✅req.params will log:
{ id: "42", name: "akshit" }
 */

app.get("/user/:id/:name", (req,res)=>{
    console.log(req.params)
    res.send({message: "this is for user/:id"})
})



/* how to read query params:
These are extra data sent with the URL, usually for filtering, searching, sorting, etc.
You access them using req.query 

💁🏻Example:
GET http://localhost:3000/user?age=25&city=delhi

✅req.query will log:{ age: "25", city: "delhi" }
*/
app.get("/user", (req, res)=>{
    console.log(req.query)
    res.send({
        sucess: true,
        message: "this is a GET request"
    })
})


//creating the server
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})

