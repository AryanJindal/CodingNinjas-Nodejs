const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");
app.post("/signup", async (req, res) => {
  const dummyUser = {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    password: "securepassword987", // Again, ensure you hash passwords in production
    age: 25,
    gender: "Female",
  };

  //Creating a new user using the old data
  //create a new instance of the User model
  const user = new User(dummyUser);

  try{
    await user.save(); //save the user to the database

  res.send("User created successfully");
  }
  catch(err){
    console.error(err);
    res.status(500).send("An error occurred. Not able to create user");
  }
});

//ideally ,we want to connect to the database before starting the server
// so we will keep the server listening inside the connectDb function
connectDb()
  .then(() => {
    console.log("Database connected");

    app.listen(3000, () => {
      console.log("Server started and is listening on port 3000");
    }); //listens on the port 3000
  })
  .catch((err) => {
    console.error("Database connection error");
    console.error(err);
  });
