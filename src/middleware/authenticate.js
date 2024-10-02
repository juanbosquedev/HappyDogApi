const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    
    const extractedToken = token.startsWith("Bearer ") ? token.slice(7, token.length).trim() : token;

    const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT verification error:", error);

    return res.status(401).json({ message: "Invalid token" });
  }
};
