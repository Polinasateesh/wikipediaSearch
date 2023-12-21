
const express = require('express');
const cors=require('cors')
const wikipediaRoutes = require('./routes/wikipediaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use('/', wikipediaRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
   
});