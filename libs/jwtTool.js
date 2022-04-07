const jsonwebtoken = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY || "abc123"
function createToken(value){
    return jsonwebtoken.sign(value,secretKey,{expiresIn:"2h"})
}
module.exports={
    createToken
}