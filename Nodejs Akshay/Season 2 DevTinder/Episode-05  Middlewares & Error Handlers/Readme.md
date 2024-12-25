* Incase of missing , response.send(), the client will continue to wait until the min of timeout or response is send( which wont be send , as res.send() is missing here.).

## setting status codes
```js
            res.status(401).send("Authorization header missing");


```
## Route Handlers
- `next` funtion
* One route can have multiple route handlers.
- ```js
    // will just wait and wait for reponse
    app.use(
        "/home",
        (req, res) => {
        },
        (req, res)=>{
            res.send("reponse 2")
        }
    )

    // will send response 2
    app.use(
        "/home",
        (req, res, next) => {
            next(); // will trigger the next handler if the current one doent respond with anything.
        },
        (req, res) => {
            res.send("response 2");
        }
    )

    // will send response 1
    // and since the reponse is send from 1, but next will still call the next handler
    // which in term , tries to send the other reponse, but they cant change the headers which are already sent
    // therefore reponse 1 will be sent and there will be an error from the second handler function
    app.use(
        "/home",
        (req, res, next) => {
            res.send("response 1")
            next(); // will trigger the next handler if the current one doent respond with anything.
        },
        (req, res) => {
            res.send("response 2");
        }
    )
  ```

- If `next` is called without having the next handler, then the client will get an error saying, `Cannot get the Url`
- The routes handlers(rH) can also be sent in an array.
- For example
  - ```js
        app.use("/route", [rH1,rH2, rH3], rH4, rH5 )

        app.use("/route3", rH1,[rH2, rH3], rH4, rH5 )
        app.use("/route", [rH1,rH2, rH3, rH4, rH5])
    ```

- next can call the next handler inside the code, not necesseraily in the function. 
- i.e
  - ```js
        app.get("/user", (req, res, next)=>{
            console.log("Handler 1")
            next();
        })

        
        app.get("/user", (req, res, next)=>{
           res.send("reponse 2");
        })
    ```
    - Here , first `Handler 1` will be printed in console, and then `response 2` will appear in the postman

### Middlerware
- all the above route handler which are put in the middle of (request from the client ) and (response from the server) are called `middleware`. Only the last function which sends the reponse is called the `route handler`
- Mostly `app.use()` is used in case of middleware. Get , post , put not generally preffered.
- **Use Case** :
  - Mostly Authentication
  - ```js
        const express = require("express");

        const app = express();

        //Checking authentication of the user
        //every admin request will go through this
        //while others will still function normally
        //this is where the request handler is now acting as a middleware
        app.use("/admin", (req, res) => {
            const authHeader = req.headers["authorization"];
            if (!authHeader) {
            res.status(401).send("Authorization header missing");
            }else{
                next();
            }
        });


        app.use(express.json()); // Middleware to parse JSON body

        // Get all data
        app.get("/admin/getAllData", (req, res) => {
            // Dummy data to simulate all records
            const data = [
                { id: 1, name: "John Doe", role: "Admin" },
                { id: 2, name: "Jane Smith", role: "User" },
                { id: 3, name: "Mike Brown", role: "Moderator" },
            ];
            res.status(200).json({
                message: "Fetched all data successfully",
                data: data,
            });
        });

        // Delete the user
        app.delete("/admin/deleteUser", (req, res) => {
            // Dummy response to simulate user deletion
            const userId = req.query.id; // Example: Pass user ID as a query parameter
            if (!userId) {
                return res.status(400).json({
                    message: "User ID is required",
                });
            }
            res.status(200).json({
                message: `User with ID ${userId} deleted successfully`,
            });
        });

        // Assign user permissions
        app.patch("/admin/permissions", (req, res) => {
            // Dummy response to simulate updating user permissions
            const { userId, permissions } = req.body; // Expect user ID and new permissions in the request body
            if (!userId || !permissions) {
                return res.status(400).json({
                    message: "User ID and permissions are required",
                });
            }
            res.status(200).json({
                message: `Permissions for user with ID ${userId} updated successfully`,
                updatedPermissions: permissions,
            });
        });


        app.listen(3000, () => {
        console.log("Server started and is listening on port 3000");
        }); //listens on the port 3000

    ```
    - This helped us from authenticating again and again

## Error Handling
- middleware are used for it
- `error is passes as the first parameter of the function`
```js
const express = require("express");
const app = express();

app.use("/getUserData", (req, res)=>{
    throw new Error("Code Failed ops");
    res.send("User data") //not reachable code
})

//note the order
//Order matter, but whyy??
app.use("/", (err, req, res, next)=>{
    if(err){
        res.status(500).send("Something went wrong")
    }
})


app.listen(3000, () => {
  console.log("Server started and is listening on port 3000");
}); //listens on the port 3000

```
- Order of Middleware Execution:
  - Middleware functions are executed in the order they are defined.
  - In this case, when an error is thrown in the `/getUserData` route, Express skips normal middleware and searches for the next error-handling middleware in the stack.
  - The order of definition does  matter for error-handling middleware because Express looks for the nearest applicable error handler when an error is encountered. 
  - And it looks downward in teh stack
  