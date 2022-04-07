const User = require("../schemas/user.schema");
async function createUser(data){
    const newUser = new User(data);
    return await newUser.save();
}
async function findUser(data){
    return await User.findOne(data);
}

module.exports={
    createUser,
    findUser
}