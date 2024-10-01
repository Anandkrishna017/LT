const jwt = require('jsonwebtoken');
const { message } = require('statuses');

const secretKey=process.env.JWT_SECRET || "key"

const verifyToken=(req,res,next)=>{
   const token = req.header('Authorization');

   if(!token){
    return res.json({message:'No token'})
   }
   try {
    const bearerToken = token.split(' ')[1];
    if (!bearerToken) {
      return res.status(401).json({ message: 'Token format is invalid' });
    }
    const decoded=jwt.verify(bearerToken,secretKey);
    req.user = decoded;
    next();
   } catch (error) {
    console.log(error)
    res.json({error,message:"jwt middleware error"});
   }
}

module.exports=verifyToken;