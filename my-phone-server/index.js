const express = require('express');
const phones = require('phones')
const app = express();
const port = 5000;

app.get('/', (req , res ) => {
    res.send("My phone information coming soon ton")
})

app.get('/phones' , (req , res) => {
    res.send(phones)
})

app.listen(port , () => {
    console.log(`My phone server is running on port : ${port}`);
})