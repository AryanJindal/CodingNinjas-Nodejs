const mongoose =  require("mongoose");
const validator = require("validator");
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
        lowercase : true, //this will convert the email to lowercase before saving it
        trim : true, //this will remove any extra spaces before and after the email
        required : true,
        imutable : true, //this will make the email field immutable
        unique : true, //this makes the feild to be unique. else duplicate check will fail

        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }

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