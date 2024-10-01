const jwt = require('jsonwebtoken')
const secretKey="key"

const createToken =(user)=>{
    return jwt.sign({userId:user.id},secretKey,{expiresIn:'1h'});
};


module.exports=createToken;