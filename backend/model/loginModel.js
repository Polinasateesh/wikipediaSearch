const mongoose = require('mongoose');


const loginSchema = mongoose.Schema({
    userName: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    isAdmin:Boolean
})


const loginModel = mongoose.model('loginModel', loginSchema)

module.exports=loginModel