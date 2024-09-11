# 
There are going to be multiple files when we are going to create a nodejs project

# Require 
- takes a path
- inbuilt
- by default enabled
- commonjs way
- will run the whole file which we are including
- **Modules by default protect their variable and functions from leaking**
  - that iscan't access one modules functions into another by just `requiring` it.
- **Therefore, we are required to explicitly export the inbuilt functions of the module**
-   ```js
    require("./xyz.js")
    ```
Here’s a detailed Markdown note explaining various ways to import and export functions using `module.exports` in Node.js. This covers exporting single and multiple functions, and how to import them with or without destructuring.


# Node.js Module Export and Import

## Overview

In Node.js, you can export functions, objects, or any data from a module so that it can be used in other files. Similarly, you can import these exports into other files using the `require` function. Below are examples demonstrating how to export and import modules in different ways.

## Exporting from a Module

### Exporting a Single Function

To export a single function, assign it to `module.exports`. This is useful when you want to export only one thing from a module.

```js
console.log("call outside the fn in start");

function calculateSum_Exportable(a, b) {
    return a + b;
}

module.exports = calculateSum_Exportable; // Exporting a single function

console.log("call outside the fn at end");
```

### Exporting Multiple Functions

To export multiple functions or variables, assign an object to `module.exports`. This allows you to group related functionalities together.

```js
console.log("call outside the fn in start");

function calculateSum_Exportable(a, b) {
    return a + b;
}

function calculateSum_Not_Exportable(a, b) {
    return a + b;
}

module.exports = {
    calculateSum_Exportable,
    calculateSum_Not_Exportable
}; // Exporting multiple functions

console.log("call outside the fn at end");
```

## Importing into Another File

### Importing Without Destructuring

When you export an object with multiple properties, you can access each property using dot notation.

```js
// app.js or any other file

var a = require("./sum.js"); // Importing the module

console.log(a.calculateSum_Exportable(10, 20)); // Using the exported function
console.log(a.calculateSum_Not_Exportable(10, 20)); // Using the other exported function
```

### Importing With Destructuring

If you only need specific functions from a module, you can use destructuring to import them directly. The variable names should match the property names used in the exported object.

```js
// app.js or any other file

var { calculateSum_Exportable, calculateSum_Not_Exportable } = require("./sum.js"); // Destructuring import

console.log(calculateSum_Exportable(10, 20)); // Using the destructured function
console.log(calculateSum_Not_Exportable(10, 20)); // Using the other destructured function
```


- **module.exports** is nothing more than a empty object 
- and we may also do 
  - ```
        module.exports.x  = x;
        module.exports.y  = calculateSum;
    ```