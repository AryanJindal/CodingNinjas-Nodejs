
# ES6 Module Syntax in Node.js

ES6 modules provide a standardized way to handle module imports and exports in JavaScript. This is different from the CommonJS syntax used by Node.js traditionally. Here’s a guide on how to use ES6 modules in Node.js.

## 1. Configuring Node.js for ES6 Modules

### Package Configuration

To use ES6 module syntax in Node.js, you need to indicate this in your `package.json` file:

```json
{
  "type": "module"
}
```

This setting tells Node.js to treat `.js` files as ES6 modules.

### File Extensions

- **`.mjs`**: If you prefer not to modify `package.json`, you can use `.mjs` as the file extension for ES6 modules.
- **`.js`**: If you set `"type": "module"` in `package.json`, you can use `.js` for ES6 modules.

## 2. Exporting Modules

### Named Exports

Use `export` to export functions, objects, or any other values from a module.

**Example: `sum.js`**
```js
// Named export of a function
export function calculateSum(a, b) {
    return a + b;
}

// Named export of another function
export function calculateDifference(a, b) {
    return a - b;
}
```

### Default Exports

You can also export a single default value or function from a module.

**Example: `math.js`**
```js
// Default export of a function
export default function calculateProduct(a, b) {
    return a * b;
}
```

## 3. Importing Modules

### Importing Named Exports

When you export multiple named values, import them using their exact names.

**Example: `app.js`**
```js
import { calculateSum, calculateDifference } from './sum.js';

console.log(calculateSum(10, 20)); // 30
console.log(calculateDifference(10, 5)); // 5
```

### Importing Default Exports

When you have a default export, import it using any name you choose.

**Example: `app.js`**
```js
import calculateProduct from './math.js';

console.log(calculateProduct(10, 20)); // 200
```

### Importing All Exports

You can import all exports from a module as a single object.

**Example: `app.js`**
```js
import * as mathFunctions from './sum.js';

console.log(mathFunctions.calculateSum(10, 20)); // 30
console.log(mathFunctions.calculateDifference(10, 5)); // 5
```

## 4. Common Issues

### File Extension

Ensure that the file extension is included in the import path. Node.js does not assume a default extension.

**Incorrect Import (missing extension):**
```js
import { calculateSum } from './sum'; // Error
```

**Correct Import:**
```js
import { calculateSum } from './sum.js'; // Correct
```

### Module Paths

Verify that the module paths are correct relative to the importing file. Use relative paths (`./` or `../`) to correctly locate the modules.

## 5. Example Project Structure

Here is a basic example of a project structure using ES6 modules:

```
your-project/
│
├── package.json
├── app.js
└── sum.js
```

**`package.json`**
```json
{
  "type": "module"
}
```

**`sum.js`**
```js
export function calculateSum(a, b) {
    return a + b;
}
```

**`app.js`**
```js
import { calculateSum } from './sum.js';

console.log(calculateSum(10, 20)); // 30
```
