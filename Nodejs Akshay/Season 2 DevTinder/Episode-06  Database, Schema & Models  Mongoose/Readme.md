# Database Schema & Models

###  folder Structure
- config
  - Every configuration file will be kept inside it 
- models
  - Models of db table
## Mongoose part

To Talk with the database, we are going to use `mongoose` as npm library
- MERN standard to connect with DB.
- Very good documentation
- `Models` are more like classes in mongoose/mongoDB

### Connecting with a DB using Mongoose
database.js
```js
const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = async () => {
  // mongoose returns a promise, therefore we can use async/await
  // the string is in the following format: mongodb+srv://<username>:<password>@<cluster>/<database>
  await mongoose.connect(
    `mongodb+srv://DevTinderAdmin:${process.env.MongoDBPassword}@nodejs-devtinder.17me2.mongodb.net/devTinder`
  );
};

module.exports = connectDb;
```

### Connecting Db with the APP
app.js
```js
const express = require("express");
const app = express();
const connectDb = require("./config/database");
//ideally ,we want to connect to the database before starting the server
// so we will keep the server listening inside the connectDb function
connectDb().then(() => {
  console.log("Database connected");

  app.listen(3000, () => {
    console.log("Server started and is listening on port 3000");
  }); //listens on the port 3000
  
}).catch((err) => {
    console.error("Database connection error");
    console.error(err);
});
```

### Creating a model
- table structure
- more like a class in oops
- User.js
```js
const mongoose =  require("mongoose");

//CamelCase is recommended for model
const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }, age : {
        type : Number,
        required : false
    }, gender :{
        type : String,
        required : false
    }
});

//create a model from the schema
//modelName, schemaName
const User = mongoose.model("User", userSchema);
module.exports = User;
```

### Creating a user in the user table
- since post is used to add some data to the databse, we are going to use the post method
- `/signup` api is getting created inside app.js

```js
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
```

### Sending Data inside of an API

- using request body and reading from it.