const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fName: {
        type: String, 
        required: true  
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    image:{
        type: String,
        require:true
    },
    mobile:{
        type: String,
        require:true
    },
    type:{
        type: Number,
        require:true
    },


});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
