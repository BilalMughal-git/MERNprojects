
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema ({ 

    firstName : {
        type:'string',
        required : true,
        class : number
    },

    lastName : {
        type:'string',
        required : true,
        class : number
    },

    email : {
        type:'string',
        required : true
    },

    password : {
        type:'string',
        required : true
    }
},
 { timestamps : true}
);



const User = mongoose.model('User',studentSchema);
module.exports = User;