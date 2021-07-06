const express = require('express');
const env = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


env.config()
const app = express();

app.use(bodyParser.json())

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

