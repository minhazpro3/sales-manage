// "use server";
// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) {
//     return res.status(201).json({ error: "Access denied " });
//   }
//   try {
//     const decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decode.userId;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Invalid token" });
//   }
//   console.log(token);
// };

// module.exports = verifyToken;
