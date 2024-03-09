## preparing Command Line scripts using node js

- Suppose i have a file name:
  - Script.js
    - console.log("Hey")
  - or script.cpp
- One way to execute them is :
  - node Script.js
  - or
    - g++ Script.cpp
    - ./a.out

- But i want it to become : "./Script.js"
  - So we will go with `shbang(#!)`.
  - The syntax is like we used to write bash scripts.
  - the file now becomes

  - ```js

    #! usr/bin/env node
    console.log("hello")
    ```

## passing CLI to the file

- Command line arguements
- Take the help of `process global`
- Can use
  - `console.log(process.argv)`
  - Will return me for `./Script.js Aryan Jindal`
    - Return me an array
    - First is the env
    - Second is the location
    - And thir onwards are the arguements which ahve been passed

## process

- `process.stdout.write("hey")` ==> cout of javascript
- `process.stdin.read()` ==> cin

- **Stream** ==>
  - Lets say i brought an home, and someone comes and ask for water
  - Stream is a flow of multiple chunk of data coming continuously to us.

## packages

- A folder containing the package.json file
- npx is used to execute the packages directly from the terminal
## file system

```js
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
//await can work outside aync functionn in ES6 but not in cjs
await writeFile(filePath, data)
```