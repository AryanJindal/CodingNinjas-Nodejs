// if i want to import a particular part
// import { sum } from "./arithmetic";

//if i want to import everything from the file
//but this will only import those things, which we have exported from the file
import * as arthimeticModule from "./arithmetic.js"

console.log(arthimeticModule.div(5,2))
