const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    console.log("No token provided");
    return res.sendStatus(401); // Unauthorized if no token is provided
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Token verification failed:", err.message);
      return res.sendStatus(403); // Forbidden if token is invalid
    }
    req.user = user; // Attach user to request object
    next();
  });
};

module.exports = authentication;
