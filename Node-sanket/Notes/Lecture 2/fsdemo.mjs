// fs comes by default with the node js
// const fs= require("fs");

//can be used when the type is module
// import fs from "fs";

//two types of syntaxes
    // promise based
    //event based
import {readFile, writeFile} from "fs/promises"

//in es6 moduling __dirname do not work
//so we will use import.meta.url
console.log(import.meta.url)



const filePath = new URL("./index.html", import.meta.url);
//utf8 should be written only insde the single quotes not in double
let data = await readFile(filePath, {encoding : 'utf8'});
console.log(data);


//writing inside the file
const dataToBeWritten = {
    title: 'my custom title',
    body: 'custom body'
}

for(const [key, value] of Object.entries(dataToBeWritten)){
    data = data.replace(`{${key}}`, value) //replace {title} ==> my custom title
}

await writeFile(filePath, data)