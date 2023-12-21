const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://polinasateesh111:polinasateesh111@wiki.8i9kjzo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('DB is connected...')).catch((error)=>console.log('Error',error))

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