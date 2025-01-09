# Encrypting the data 
- We dont want the passwords to be directly available in the dtabase, like suppose a scenario of data breach.
- So we will encrypt the passwords and then store it

# Never Trust req.body
- An attacker can maliciour or lets say really really long data, which will end up eating space in our database.

### Industry practice
- So , we will create some seprate `validators` inside of our js functions
- Create a helper function in a new folder under utils under src
  - `src/utils/helper/validator1.js`

## Validator.js
The `validator` library is a popular JavaScript library used for string validation and sanitization. It provides a variety of utility functions to check or sanitize inputs in a reliable and consistent way. Below are some key notes on the library:

---

### 1. **Overview**
- **Purpose**: It simplifies the process of validating and sanitizing user inputs, especially useful when working with forms, APIs, or handling raw user data in web applications.
- **Key Features**: The library offers a range of built-in methods to validate strings against various rules (like email formats, URL formats, etc.) and sanitize strings (e.g., trimming whitespace, removing unsafe characters).

---

### 2. **Installation**

You can install the `validator` library using npm or yarn:

- **Using npm**:
  ```bash
  npm install validator
  ```

- **Using yarn**:
  ```bash
  yarn add validator
  ```

---

### 3. **Core Functionalities**
The library supports both **validation** and **sanitization**:

#### Validation Methods
These methods are used to check if a given string matches certain patterns or criteria.

- **`validator.isEmail(str)`**: Checks if a string is a valid email address.
- **`validator.isURL(str)`**: Validates if a string is a valid URL.
- **`validator.isAlpha(str)`**: Checks if the string contains only alphabetic characters.
- **`validator.isNumeric(str)`**: Checks if the string contains only numeric characters.
- **`validator.isInt(str)`**: Checks if the string is an integer.
- **`validator.isLength(str, { min, max })`**: Validates the length of a string.
- **`validator.isDate(str)`**: Checks if the string is a valid date.
- **`validator.isBoolean(str)`**: Checks if the string is a boolean (`true` or `false`).
- **`validator.isCreditCard(str)`**: Checks if the string is a valid credit card number.
- **`validator.isJWT(str)`**: Validates if the string is a valid JSON Web Token (JWT).

#### Sanitization Methods
These methods are used to clean or transform input data.

- **`validator.trim(str)`**: Trims whitespace from both ends of a string.
- **`validator.escape(str)`**: Escapes HTML characters (`<`, `>`, etc.) to their HTML entity equivalents.
- **`validator.normalizeEmail(str)`**: Sanitizes an email address by removing special characters, converting to lowercase, etc.
- **`validator.toDate(str)`**: Converts a string to a JavaScript `Date` object.
- **`validator.toFloat(str)`**: Converts a string to a floating-point number.

---

### 4. **Common Use Cases**

- **User Input Validation**: Ensuring that inputs in forms or APIs match expected formats (e.g., valid email addresses, numeric values).
- **Sanitizing Inputs**: Cleaning user-provided data to remove unsafe characters (e.g., XSS protection) or normalize data (e.g., trimming extra spaces).
- **Security**: Protecting applications from common injection attacks by sanitizing inputs and ensuring they meet specific patterns before being processed.

---

### 5. **Examples**

#### Example 1: Email Validation
```javascript
const validator = require('validator');

const email = 'user@example.com';

if (validator.isEmail(email)) {
  console.log('Valid email!');
} else {
  console.log('Invalid email!');
}
```

#### Example 2: URL Validation
```javascript
const url = 'https://www.example.com';

if (validator.isURL(url)) {
  console.log('Valid URL!');
} else {
  console.log('Invalid URL!');
}
```

#### Example 3: String Sanitization (Trimming)
```javascript
const inputString = '   Hello World!   ';

const sanitizedString = validator.trim(inputString);

console.log(sanitizedString); // "Hello World!"
```

#### Example 4: Normalizing Email
```javascript
const email = 'User@Example.Com';

const normalizedEmail = validator.normalizeEmail(email);

console.log(normalizedEmail); // "user@example.com"
```

---

### 6. **Integration with Other Libraries**
- The `validator` library is often used in combination with other libraries and frameworks (e.g., **Express.js**, **Joi**, **React**, **Angular**) to provide full-scale validation and sanitization features.
- It can be used alongside libraries like **express-validator** for enhanced form validation in backend applications.

---

### 7. **Custom Validation**
You can define custom validation logic if the built-in methods don't cover your specific use case. For example, combining multiple checks or creating your own regular expression validations.

```javascript
const customValidation = (str) => {
  return validator.isAlpha(str) && str.length > 5; // Must be alphabetic and at least 6 characters long
};

console.log(customValidation('Hello')); // true
console.log(customValidation('Hi')); // false
```

---

### 8. **Performance**
- **Lightweight**: The library is lightweight and optimized for fast performance, making it ideal for use in both frontend and backend JavaScript environments.
- **Small Package**: The core library is relatively small in terms of file size, making it suitable for environments where minimal dependencies are required.

---

### 9. **Error Handling**
The library's methods typically return boolean values to indicate success or failure, so developers should handle the validation results accordingly. If validation fails, you can return a relevant error message to the user.

---

### 10. **Browser Compatibility**
The library is compatible with both **Node.js** and modern **browsers**, making it versatile for both frontend and backend development.

---

### 11. **Additional Considerations**
- The `validator` library focuses only on string-based validation and sanitization, so it doesn't cover more complex types or data structures.
- If you need to validate more complex objects or perform additional checks (e.g., nested objects, arrays), you may want to integrate it with other libraries like **Joi** or **yup**.


## bcrypt
### Notes on **bcrypt** Library

---

### 1. **Overview**
`bcrypt` is a popular library for hashing passwords in a secure and efficient way. It uses a salt to prevent rainbow table attacks and is commonly used in authentication systems.

---

### 2. **Installation**
- **Using npm**:
  ```bash
  npm install bcrypt
  ```

- **Using yarn**:
  ```bash
  yarn add bcrypt
  ```

---

### 3. **Core Use Cases**

#### a) **Hashing Passwords**
- To securely store passwords by hashing them.
```javascript
const bcrypt = require('bcrypt');

const password = 'userPassword';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('Hashed Password:', hash);
});
```

#### b) **Comparing Hashed Passwords**
- To check if a user's input matches the stored hashed password.
```javascript
const storedHash = '$2b$10$....'; // stored from previous hash
const inputPassword = 'userPassword';

bcrypt.compare(inputPassword, storedHash, (err, result) => {
  if (err) throw err;
  console.log('Password Match:', result); // true or false
});
```

---

### 4. **Salting**
- **Salts** are random strings added to the password before hashing to prevent hash collisions and attacks.
- `bcrypt` automatically handles salt generation when hashing a password, making it secure by default.

---

### 5. **Use Case Summary**
- **Authentication Systems**: Hashing and comparing passwords for user login.
- **Secure Storage**: Storing sensitive user data, like passwords, securely in databases.
- **Password Resets**: Validating reset tokens by comparing hashes.

---

### 6. **Important Notes**
- **Asynchronous vs. Synchronous**: Both async and sync methods are available. Always prefer async to prevent blocking the event loop.
- **Salt Rounds**: The higher the rounds, the stronger and slower the hash (default is 10). Higher values increase security but reduce performance.

