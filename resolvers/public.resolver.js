
const {encrypt,check} = require("../libs/encryptTool");
const {createToken} = require("../libs/jwtTool");
const {createUser,findUser } = require("../database/mongo/repositories/user.repository");
async function signup(userData){
    
    let {password,email, ...userD} = userData;
    const user = await findUser({email});
    if(user) throw new Error("Email already exists in DB");
    const encryptedPassword = await encrypt(password);
    return await createUser({...userD,email, password:encryptedPassword});
}
async function login(userData){
    const {password, email} = userData;
    
    const user = await findUser({email});
    if(!user) throw new Error("User does not exists")
    
    const isSamePassword = await check(password,user.password);
    if(!isSamePassword){throw new Error("Password does not match with email registered")}
    const token = createToken({email});

    return {id:user.id, token};
}

module.exports ={
    signup,
    login
}