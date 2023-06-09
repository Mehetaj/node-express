const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


const places = require('./area.json')

app.get('/', (req, res) => {
res.send('Travel guru server running')
})


app.get('/places' , (req , res) => {
    res.send(places);
})


app.listen(5000, () => {
    console.log("App is runnind on 5000 port");
})