# Lets Code
To run a program : `node ENtry_point_fileName.js`

## global
- A Global Object in nodejs
  - Just like `window` in browsers.
  - Only difference , browser's `this`,`self`(web workers),`frame` points to window
    - while nodejs's `this` is empty
- Now to avoid all this confusion between browsers and various runtimes like node, the committee decided to use the word `globalthis` for the global keyword
- It is a nodejs thing not a vs thing
- console.log(global)
- Gives access to stuffs like 
    - setInterval
    - clearInterval
    - setTimeout
    - and more...