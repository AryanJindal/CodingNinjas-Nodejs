const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");

//express json middleware setup
app.use("/", express.json());

//get user from an email
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const users = await User.find({ email: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    }
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred. Not able to get user");
  }
});

//get the feed of a user
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred. Not able to get user");
  }
});
//create a new user
app.post("/signup", async (req, res) => {
  console.log(req);
  const dummyUser = req.body; //get the user data from the request body
  const user = new User(dummyUser);

  try {
    await user.save(); //save the user to the database

    res.send("User created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred. Not able to create user");
  }
});

//delete a user by _id from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userID; // i will send id as userID in the request body
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(404).send("User not found");
    }
    res.send("User deleted successfully");
  } catch (err) {
    //if there is an error
    res.status(500).send("An error occurred. Not able to delete user");
  }
});


//update the user details
app.patch("/user", async (req, res) => {
  const userId = req.body.userID;
  const updateData = req.body.updateData;
  try {
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true }); //find the user by id and update the user details
    //Note: {new:true} is used to return the updated user data
  }catch (err) {
    console.error(err);
    res.status(500).send("An error occurred. Not able to update user");
  }
});


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
