const jwt = require('jsonwebtoken');

module.exports  = async (req, res, next) => {
  const token = req.header("auth-token");
  // const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  // Verify the token
  const verifyToken = await jwt.verify(token, process.env.SEC)
    if (!verifyToken) {
      return res.status(403).json({ message: 'Invalid token' });
    }

     // Add user data to request object
    // req.user = user;
    next()
  
};
