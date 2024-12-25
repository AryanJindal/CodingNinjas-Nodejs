const express = require("express");
const {adminAuth} = require("./middlewares/auth")
const app = express();

//Checking authentication of the user
app.use("/admin", adminAuth );


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
