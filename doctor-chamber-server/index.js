const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json())
//////////////////////



app.get('/',(req ,res) => {
    res.send('Doctor Appointment server is runnig')
})



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://doctorChamber:QNj4358qDzDJ8Wxr@cluster0.4bdkenh.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const appointmentCollection = client.db('AppointmentCollection').collection('appointment')


    app.get('/appointments' , async(req ,res) => {
        const cursor = appointmentCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.post('/appointments',async(req ,res) => {
        const newAppointment = req.body;
        const result = await appointmentCollection.insertOne(newAppointment)
        res.send(result)
    })







    /////////////////////////////////////////////
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})