
const jwt = require('jsonwebtoken');
module.exports = (roles=[]) => (req,res,next)=>{
 const token = req.headers.authorization?.split(' ')[1];
 if(!token) return res.status(401).send("No token");
 const user = jwt.verify(token,'secret');
 if(roles.length && !roles.includes(user.role)) return res.status(403).send("Forbidden");
 req.user = user;
 next();
};
