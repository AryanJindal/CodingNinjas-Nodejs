const http = require('http');
const fs = require('fs')
const server = http.createServer((req, Response)=>{
    //first we need to read the html file inside js
    //so we will use an module namely fs module(file-system module)

    const htmlFileData = fs.readFileSync("/home/aryan/Desktop/Projects/Web-dev/CodingNinjas-Nodejs/Week 1/Lecture1/index.html");
    const htmlDataInFormOfString  = htmlFileData.toString();
    Response.end(htmlDataInFormOfString)
})

server.listen(3100, ()=>{console.log("server is listening")})