const jwt = require('jsonwebtoken')
const secretKey=process.env.JWT_SECRET || "key"

const createToken =(user)=>{
    return jwt.sign({userId:user.id},secretKey,{expiresIn:process.env.JWT_EXPIRES_IN});
};


module.exports=createToken;