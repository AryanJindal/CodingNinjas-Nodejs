# Validating the data for API's
- we are going to validate every peice of data before it gets inserted into our db, so that our Db do not have any garbage data

## Schema validations
- can add `required` field to be true inside the model to make a field manadatory
- `unique : true` makes the field to be unique. Generally used for username and email 
- `validate` function
  - by default, only gets called when a new document is created.
  - not when it is updated
  - Thererfore, set the following in app.put
    - `const user = await User.findByIdAndUpdate(userId, updateData, { new: true ,runValidators : true}); //find the user by id and update the user details`
- `min`
- `max`
- `maxLength`
- `default`
- `trim`
- `lowercase`
- `imutable`
```js
const mongoose =  require("mongoose");
const userSchema = mongoose.Schema({
    
    firstName : {
        type : String,
        minLength : 3, //this will set the minimum length of the field
        maxLength : 50, //this will set the maximum length of the field
        required : true //this field is compulsory now, can't be empty anymore
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        imutable:true, //this will set the email to not be changed later.
        lowercase : true, //this will convert the email to lowercase before saving it
        trim : true, //this will remove any extra spaces before and after the email
        required : true,
        unique : true //this makes the feild to be unique. else duplicate check will fail
    },
    password : {
        type : String,
        required : true
    }, age : {
        type : Number,
        min : 18, //this will set the minimum value of the field
        max : 70, //this will set the maximum value of the field
        required : false
    }, gender :{
        // should be male, female or others
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Invalid value for Gender field");
            }
        },
        type : String,
        required : false
    }, photoUrl : {
      type : String,
      default : "https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
    },
    about:{
        type : String,
        required : false,
        default : "No description provided" // to set default values for something
    }, skills :{
        type : [String], //to make it an array of strings 
    }
}, 
    {   timestamps : true //this will add the created at and updated at fields to the schema
        // will add createdAt and updatedAt fields to the schema
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
```

## API Validation
- SUppose i want that only the [gender, photoUrl, about, age, skills] field to be updatable from the API.
```js

//update the user details
app.patch("/user", async (req, res) => {
  const userId = req.body.userID;
  const updateData = req.body.updateData;
  const allowedFields = ["gender", "photoUrl", "about", "age", "skills"];
  const filteredUpdateData = {};

  // Filter the updateData to only include allowed fields
  Object.keys(updateData).forEach(key => {
    if (allowedFields.includes(key)) {
      filteredUpdateData[key] = updateData[key];
    }
  });
  //skills can not be more than 20
  if(filteredUpdateData.skills && filteredUpdateData.skills.length > 20){
    return res.status(400).send("Skills can not be more than 20");
  }
  try {
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true ,runValidators : true}); //find the user by id and update the user details
    //Note: {new:true} is used to return the updated user data
  }catch (err) {
    console.error(err);
    res.status(500).send("An error occurred. Not able to update user");
  }
});


```
- **There is also a npm libary known as `validator.js`**
  - ```js

      const mongoose =  require("mongoose");
      const validator = require("validator");
      const userSchema = mongoose.Schema({
          email : {
              type : String,
              lowercase : true,
              trim : true, 
              required : true,
              imutable : true,
              unique : true, 

              validate(value){
                // Setting the validator to check if it is a valid email or not
                  if(!validator.isEmail(value)){
                      throw new Error("Invalid Email");
                  }
              }

          }
      });
      const User = mongoose.model("User", userSchema);
      module.exports = User;

    ```