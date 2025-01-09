const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const { validateLoginData } = require("./utils/validation");
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
  // console.log(req);
  const UserData = req.body; //get the user data from the request body

  try {
    //validate the user data
    validateSignUpData(req);

    //hash the password
    const hashedPassword = await bcrypt.hash(UserData.password, 8); //the second argument is the number of rounds to hash the password
    UserData.password = hashedPassword;

    const user = new User(UserData);

    await user.save(); //save the user to the database

    res.send("User created successfully");
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("An error occurred. Not able to create user ." + err.message);
  }
});

//login a user
app.post("/login", async (req, res) => {
  const { email, password } = req.body; //get the email and password from the request body

  try {
    validateLoginData(req); //validate the user data
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }); //find the user by email
    if (!user) throw new Error("Invalid Credentials");

    const isPasswordValid = await bcrypt.compare(password, user.password); //compare the password with the hashed password

    if (isPasswordValid) {
      res.send("Login successful");
    }else{
      res.status(400).send("Invalid Credentials")
    }
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
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
  const allowedFields = ["gender", "photoUrl", "about", "age", "skills"];
  const filteredUpdateData = {};

  // Filter the updateData to only include allowed fields
  Object.keys(updateData).forEach((key) => {
    if (allowedFields.includes(key)) {
      filteredUpdateData[key] = updateData[key];
    }
  });
  //skills can not be more than 20
  if (filteredUpdateData.skills && filteredUpdateData.skills.length > 20) {
    return res.status(400).send("Skills can not be more than 20");
  }
  try {
    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    }); //find the user by id and update the user details
    //Note: {new:true} is used to return the updated user data
  } catch (err) {
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
