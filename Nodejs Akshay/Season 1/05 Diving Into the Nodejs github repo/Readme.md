Wehenever we create a module in js, basically what happens in the backend is that the nodejs will enclose all the things which we want to export into another function and export them.

on `require("./xyz.js")` nodejs will get the code from xyz and wraps it inside a `fucntion(IIFE)`

## IIFE

```js
(function(){

})() //Created and called the function at the same time
```

- Immediately Invoked Function Expression
- Keeps your variable and functions safe.