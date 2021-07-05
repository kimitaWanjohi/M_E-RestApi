const express = require('express');

const app = express();


app.post('/', (req, res)=> {
    res.send('got a post request')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));



