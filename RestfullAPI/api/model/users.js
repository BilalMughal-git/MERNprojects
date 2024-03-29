
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema ({ 

    firstName : {
        type:'string',
        required : true
    },

    lastName : {
        type:'string',
        required : true
    },

    email : {
        type:'string',
        required : true,
        unique : true,
    },

    password : {
        type:'string',
        required : true
    }
},
 { timestamps : true}
);


const User = mongoose.model('User',UserSchema);
module.exports = User;