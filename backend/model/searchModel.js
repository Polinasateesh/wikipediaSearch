const mongoose = require('mongoose');

const searchSchema =  mongoose.Schema({
    searchkeyword: {
        type: String,
        required:true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
})

const searchModel = mongoose.model('searchModel', searchSchema)



module.exports=searchModel