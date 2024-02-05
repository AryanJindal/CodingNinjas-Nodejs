const fs = require("fs");

//Creating a file
try {
  fs.writeFileSync(
    "employee.txt",
    "Name : John Doe, Age : 40, position : Manager"
  );
} catch (err) {
  console.error(err);
}

//To append some data to an existing file
fs.appendFileSync("employee.txt", "Name : David , age : 55, Position: CEO");

// To delete a file
// Node js is not able to delete a file
// it will just unlink the file from os, and hence it will gte deleted
try {
  fs.unlinkSync("employee.txt");
} catch (err) {
  console.log("File don't exist", err);
}

console.log("This is another operation which is being performed");
