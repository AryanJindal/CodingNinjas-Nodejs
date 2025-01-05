const express = require("express");
const app = express();

app.use("/getUserData", (req, res)=>{
    throw new Error("Code Failed ops");
    res.send("User data") //not reachable code
})

//note the order
//here it is coming after, but whyy??
app.use("/", (err, req, res, next)=>{
    if(err){
        res.status(500).send("Something went wrong")
    }
})


app.listen(3000, () => {
  console.log("Server started and is listening on port 3000");
}); //listens on the port 3000
