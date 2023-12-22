const mongoose = require('mongoose');
const express = require('express');
const cors=require('cors')
const wikipediaRoutes = require('./routes/wikipediaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.use('/', wikipediaRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
   
});
mongoose.connect('mongodb+srv://polinasateesh111:polinasateesh111@wiki.8i9kjzo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('DB is connected...')).catch((error)=>console.log('Error',error))
