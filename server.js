const express = require('express');
const env = require('dotenv')
const mongoose = require('mongoose')

env.config()
const app = express();

// Routes 
const postRoutes = require('./routes/posts');


app.use('/posts', postRoutes)

// Database

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connects')
    )



const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`server started on ${PORT}`));



