const express = require("express");

const app =  express();

// Setting the GET call
app.get("/user", (req, res)=>{
    res.send({
        "firstName" : "Aryan",
        "lastName" : "Jindal"
    })
})


// Setting the POST call
app.post("/user", (req, res)=>{
    console.log("Data is saved to the database using the POST call")
    res.send("Ur data is recieved successfully")
    console.log(req.body)
})


// Setting the DELETE call
app.delete("/user", (req, res)=>{
    console.log("User Deleted");
    res.send("User Deleted");
})

// Setting the PATCH call
app.patch("/user", (req, res)=>{
    console.log("User patched");
    res.send("User patched");
})


// Setting the PUT call
app.put("/user", (req, res)=>{
    console.log("A successful put call");
    res.send("A successful put call");
})

//query params
app.get("/abc", (req, res)=>{
    console.log(req.query)
    res.send("Query Params recieved")

    // for example
    // request : {{url}}/abc?firstName="Aryan"&lastName=Jindal
    // params from console.log : { firstName: '"Aryan"', lastName: 'Jindal' }
})
app.listen(3000, ()=>{
    console.log("Server started and is listening on port 3000")
}) //listens on the port 3000
