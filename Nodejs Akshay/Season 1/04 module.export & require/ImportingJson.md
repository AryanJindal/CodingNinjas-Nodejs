Importing data from JSON files in Node.js is straightforward thanks to the built-in `fs` module or ES6 import syntax if using modern JavaScript. Here's how you can handle it using different methods:

### Method 1: Using `fs` Module

You can use the `fs` module to read JSON data from a file.

#### Example

1. **Create a JSON File**

   Suppose you have a JSON file named `data.json`:

   ```json
   // data.json
   {
       "name": "John Doe",
       "age": 30,
       "email": "john.doe@example.com"
   }
   ```

2. **Read the JSON File**

   Use the `fs` module to read and parse the JSON file in your Node.js script:

   ```javascript
   const fs = require('fs');
   const path = require('path');

   // Path to the JSON file
   const filePath = path.join(__dirname, 'data.json');

   // Read and parse the JSON file
   fs.readFile(filePath, 'utf8', (err, data) => {
       if (err) {
           console.error('Error reading file:', err);
           return;
       }
       const jsonData = JSON.parse(data);
       console.log(jsonData);
   });
   ```

   In this example:
   - `fs.readFile` reads the file asynchronously.
   - `JSON.parse` converts the JSON string into a JavaScript object.

### Method 2: Using ES6 `import` (for `.json` Files)

If you’re using a recent version of Node.js and have set `"type": "module"` in your `package.json`, you can import JSON files directly using ES6 `import` syntax.

1. **Ensure the JSON File is Present**

   Create a `data.json` file as shown earlier.

2. **Use `import` to Read the JSON File**

   Here’s how you can import the JSON file directly:

   ```javascript
   import data from './data.json' assert { type: 'json' };

   console.log(data);
   ```

   Note that:
   - The `assert { type: 'json' }` syntax is required to indicate the file type.
   - Ensure that your Node.js version supports this syntax (Node.js 18+).

### Method 3: Using `require` (CommonJS)

For CommonJS modules, you can use `require` to import JSON files directly. This method works without needing additional configuration.

1. **Create the JSON File**

   Create `data.json` as shown before.

2. **Use `require` to Load the JSON File**

   ```javascript
   const data = require('./data.json');

   console.log(data);
   ```

   Note:
   - The `require` function synchronously loads and parses the JSON file.

### Summary

- **Asynchronous Reading**: Use `fs` module with `fs.readFile` for asynchronous reading.
- **ES6 `import`**: Use `import` syntax for directly importing JSON files in ES modules (requires Node.js 18+ and `"type": "module"`).
- **CommonJS `require`**: Use `require` for synchronous reading in CommonJS modules.

Choose the method that best fits your project setup and Node.js version.