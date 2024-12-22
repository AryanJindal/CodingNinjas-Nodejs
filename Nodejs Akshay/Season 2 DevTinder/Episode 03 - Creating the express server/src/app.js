const express = require("express");

const app =  express();

//if nothing is passed then it will listen on the basic port 
app.use("/test", (request, response) => { // will send "Hello from the server" on the page localhost:3000/test
    response.send("Hello from the server")
})

app.use("/hello", (request, response) => { // will send "Hello Hello Hello" on the page localhost:3000/hello
    response.send("Hello Hello Hello")
})

app.listen(3000, ()=>{
    console.log("Server started and is listening on port 3000")
}) //listens on the port 3000