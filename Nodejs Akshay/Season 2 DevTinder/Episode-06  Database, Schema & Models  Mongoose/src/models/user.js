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