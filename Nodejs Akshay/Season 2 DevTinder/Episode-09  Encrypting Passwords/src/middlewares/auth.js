const adminAuth = (req, res, next) => {
    const authHeader = req.headers["authorization"]; //set to Auth-header in postman requests
    if (authHeader != "admin-auth-token") {
      res.status(401).send("Authorization header missing");
    }else{
        next();
    }
}

module.exports = {
  adminAuth
}