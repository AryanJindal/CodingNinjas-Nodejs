const validator = require('validator');

const validateSignUpData = (req) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName){
        throw new Error("First Name missing")
    }else if(!lastName){
        throw new Error("Last Name missing")
    }else if(!email){
        throw new Error("Email missing")
    }else if(!password){
        throw new Error("Password missing")
    }

    //validations for firstName
    if(firstName.length < 3){
        throw new Error("First Name should be atleast 3 characters long")
    }else if(firstName > 20){
        throw new Error("First Name should be atmost 20 characters long")
    }

    //validations for lastName
    if(lastName.length < 3){
        throw new Error("Last Name should be atleast 3 characters long")
    }else if (lastName > 20){
        throw new Error("Last Name should be atmost 20 characters long")
    }

    //email validation
    if(!email.includes("@")){
        throw new Error("Invalid email")
    }
    //regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(emailRegex.test(email) === false || !validator.isEmail(email)){
        throw new Error("Invalid email")
    }

    //password validation
    // length should be atleast 8 characters
    // should contain atleast one uppercase letter
    // should contain atleast one lowercase letter
    // should contain atleast one number
    // should contain atleast one special character
    if(password.length < 8){
        throw new Error("Password should be atleast 8 characters long")
    }else if(!password.match(/[A-Z]/)){
        throw new Error("Password should contain atleast one uppercase letter")
    }else if(!password.match(/[a-z]/)){
        throw new Error("Password should contain atleast one lowercase letter")}
    else if(!password.match(/[0-9]/)){ 
        throw new Error("Password should contain atleast one number")
    }else if(!password.match(/[!@#$%^&*]/)){
        throw new Error("Password should contain atleast one special character")
    }

}


const validateLoginData = (req) => {
    const { email, password} = req.body;

     if(!email){
        throw new Error("Email missing")
    }else if(!password){
        throw new Error("Password missing")
    }

    //email validation
    if(!email.includes("@")){
        throw new Error("Invalid email")
    }
    //regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(emailRegex.test(email) === false || !validator.isEmail(email)){
        throw new Error("Invalid email")
    }

    //password validation
    // length should be atleast 8 characters
    // should contain atleast one uppercase letter
    // should contain atleast one lowercase letter
    // should contain atleast one number
    // should contain atleast one special character
    if(password.length < 8){
        throw new Error("Password should be atleast 8 characters long")
    }else if(!password.match(/[A-Z]/)){
        throw new Error("Password should contain atleast one uppercase letter")
    }else if(!password.match(/[a-z]/)){
        throw new Error("Password should contain atleast one lowercase letter")}
    else if(!password.match(/[0-9]/)){ 
        throw new Error("Password should contain atleast one number")
    }else if(!password.match(/[!@#$%^&*]/)){
        throw new Error("Password should contain atleast one special character")
    }

}

module.exports = { validateSignUpData, validateLoginData };