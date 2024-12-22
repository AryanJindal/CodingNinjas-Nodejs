`npm init` initialise the project 

## versioning 
- `x.y.z`
- x ==> major version
    - Generally updated only when the changes push will break the previous code on the repo
- y ==> minor changes
  - Feature addition 
  - backward compatible
- z ==> PAtch
  - For bug fixes

- Inside the package.json
  - ```json
     dependencies : {
        "express" : "^4.19.2"  //version which are allowed.
     }
    ```
    ^ ==> that auto update for minor and patch changes


- what actual version i am using is defined in the `package-lock.json`.
  

## nodemon
- installed globallaly that's why `-g`
- `npm i -g nodemon`
- automatically restarts the server whenever some changes are made to the files

### npm run

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "nodemon src/app.js",
    "start" : "node src/app.js"
  },
```

- can be run using
  - `npm run start`
  - npm run dev
  - npm run test


## Setting the express server.

```js
const express = require("express");

const app =  express();

//if nothing is passed then it will listen on the basic port 
app.use("/test", (request, response) => { // will send "Hello from the server" on the page localhost:3000/test
    response.send("Hello from the server")
})

app.use("/hello", (request, response) => { // will send "Hello Hello Hello" on the page localhost:3000/hello
    response.send("Hello Hello Hello")
})

app.listen(3000, ()=>{
    console.log("Server started and is listening on port 3000")
}) //listens on the port 3000
```