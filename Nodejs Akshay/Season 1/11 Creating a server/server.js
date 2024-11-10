// We will use http module to create the web servers

const http = require("http");

//creating a server which will repond with hello world to every call
const server = http.createServer(function(request, response){
    if(request.url === "/"){
        response.end("Welcome to the home page");
    }else if(request.url === "/getSecretData"){
        response.end("Your secret data is here");
    }else{
        response.end("Hello World");
    }
});

server.listen(7777); //the server willmlistem for requests on this port(7777)