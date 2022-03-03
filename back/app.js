const express = require('express');
const { env } = require('process');
const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Server is ready');
})
app.listen(port, ()=>{
    console.log(`Server running into ${port}`)
})