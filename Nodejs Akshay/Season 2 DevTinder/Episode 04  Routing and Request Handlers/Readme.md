
## Route Matching

```js
// More like wildcard matching here.
app.use("/arya", (req, res) => {
    // Since the code has /arya, /arya/home, /arya/test, every page will send the result of /arya.
    res.send("Home page");
});
```

- Every URL that starts with `/arya` will be redirected here.
- i.e., these are all the same:
  - `/arya`
  - `/arya/home`
  - `/arya/test`
  - `/arya/random`
- But these will be treated differently:
  - `/arya123`
  - `/aryaabc`

### Order of code matters
- The routes are searched in the following manner:
  - **Top to bottom in the file.**
  - i.e., in the following case:
    ```js
    app.use("/test", (request, response) => {
        response.send("Hello from the server");
    });

    app.use("/hello", (request, response) => {
        response.send("Hello Hello Hello");
    });

    app.use("/", (req, res) => {
        res.send("Home page");
    });
    ```
    - `/hello` will send "Hello Hello Hello."
    - `/test` will send "Hello from the server."

- On the contrary:
  - i.e., in the following case:
    ```js
    app.use("/", (req, res) => {
        res.send("Home page");
    });

    app.use("/test", (request, response) => {
        response.send("Hello from the server");
    });

    app.use("/hello", (request, response) => {
        response.send("Hello Hello Hello");
    });
    ```
    - `/hello` will send "Home page."
    - `/test` will send "Home page."

## postman
- going to be used to run api's

## Setting Methods
in place of `use` in the `app.use()` , simply use the method name
- `Use` matches all the Http calls to that url


```js

// Setting the GET call
app.get("/user", (req, res)=>{
    res.send({
        "firstName" : "Aryan",
        "lastName" : "Jindal"
    })
})


// Setting the POST call
app.post("/user", (req, res)=>{
    console.log("Data is saved to the database using the POST call")
    res.send("Ur data is recieved successfully")
    console.log(req.body)
})


// Setting the DELETE call
app.delete("/user", (req, res)=>{
    console.log("User Deleted");
    res.send("User Deleted");
})

// Setting the PATCH call
app.patch("/user", (req, res)=>{
    console.log("User patched");
    res.send("User patched");
})


// Setting the PUT call
app.put("/user", (req, res)=>{
    console.log("A successful put call");
    res.send("A successful put call");
})
```

## Pattern matching in url

```js
// Express.js pattern matching in URLs

/**
 * Example of `+` pattern:
 * Matches routes where 'b' occurs one or more times after 'a', followed by 'c'.
 * Example URLs: /abc, /abbc, /abbbbbbc
 */
app.use("/ab+c", (req, res) => {
  res.send("Matched a URL with one or more 'b' characters after 'a' and followed by 'c'.");
});

/**
 * Example of `?` pattern:
 * Matches routes where the character before `?` is optional.
 * Example URLs: /ac, /abc (here 'b' is optional)
 */
app.use("/ab?c", (req, res) => {
  res.send("Matched a URL where 'b' is optional before 'c'.");
});

/**
 * Additional Notes:
 * - Patterns are case-sensitive by default.
 * - These patterns allow you to define flexible and dynamic routes.
 *
 * More Express patterns:
 * - `*` Matches any sequence of characters (except for '/').
 *    - "a*c" means , anything between a and c
 *         - ac
 *         - aasdfghjkc
 *         - ahbecbwepbcp9ebciwbc
 *         - axneouhbc9webciwencjlnwucbric
 * 
 * - `(pattern)` Captures matched groups (e.g., '/:id(\\d+)' for numeric IDs).
 */



```
- Regex are also supported here
- Grouping can be done by using brackets (curly one)
  - app.use("a(aabraKaDaabra)?c")

## Query Params

- `localhost:3000/users?username="AryanJindal"&number=10`
- to get these , do   `req.query`, it will return an json of params

- `localhost:3000/users/101/aryan` is called from postman
- `localhost:3000/users/:userID/:name` is url set in app.use();
- to get these , do   `req.params`, it will return an json of params. ==> {userID : 101, name : Aryan}
