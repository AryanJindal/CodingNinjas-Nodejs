console.log("call outside the fn in start")
function calculateSum_Exportable(a,b){
    return a+b;
}
function calculateSum_Not_Exportable(a,b){
    return a+b;
}
//to eport only one
// module.exports = calculateSum_Exportable; 

//to export multiple
module.exports = {calculateSum_Exportable, calculateSum_Not_Exportable};

// //to use it in the app.js
// //way one : 
// var a  = require("./sum.js");
// console.log(a.calculateSum_Exportable(10,20));
// console.log(a.calculateSum_Not_Exportable(10,20));


// //or use destructuring : 
// // but the name should remain the same as of the varibales exported.
// var {calculateSum_Exportable, calculateSum_Not_Exportable} = require("./sum.js")

console.log("call outside the fn at end")
