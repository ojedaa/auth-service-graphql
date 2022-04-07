const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10;

async function encrypt(value){
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(value, salt);
}
async function check(value1,value2){
    return bcrypt.compareSync(value1, value2);
}

module.exports={
    encrypt,
    check
}