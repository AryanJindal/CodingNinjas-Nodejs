//importing the readline
const readline = require('readline')

// 2. Building the connection b.w the aplication and the terminal
// Configuring interface to connect with terminal/command line

//the fn createInterface returns an interface which is stored inside the interface variable
const Interface = readline.createInterface({ 
    input : process.stdin, //process belongs to the nodejs ecosystem and it has property stdin which allows us to read inputs from the terminal
    output : process.stdout
})

// 3. read from termi
Interface.question("enter the first number", (num1)=>{
    //now i have recieved a number in num1
    //and have to ask for second number
    Interface.question("Enter the second number", (num2)=>{
        const sum = num1+num2;
        console.log(sum);
        Interface.close();
    })
}) // expects a string and a callback