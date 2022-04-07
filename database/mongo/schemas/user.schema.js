const {Schema, model} = require('mongoose');

const schema = Schema({
    name: {
        type: String,
        required: [true,'Name is mandatory']
    },
    email:{
        type:String,
        required:[true,'Email is mandatory'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Password is mandatory'],
    },

});
schema.methods.toJSON = function (){
    const {__v,password,_id, ... user} = this.toObject();
    user.id=_id; 
    return user;
}

const User = model('User',schema);
module.exports=User;