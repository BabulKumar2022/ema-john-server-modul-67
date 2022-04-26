const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const cors =require('cors');
const port = process.env.PORT || 5000;
const app = express();

//middleware

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mvrpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        await client.connect();
        const productionCollection = client.db('emajohn').collection('project');
        app.get('/product', async(req, res) =>{
            const query ={};
            const cursor = productionCollection.find(query);
            const products = await cursor.toArray();
            res.send(project);
        })
    }
finally{}
}
run().catch(console.log.dire);
// client.connect(err => {
//   const collection = client.db("emajohn").collection("products");
//   console.log('MongoDB is connected')
//   // perform actions on the collection object
//   client.close();
// });


app.get('/', (req, res) =>{
    res.send('John is running to ema')
});

app.listen(port, () =>{
    console.log('John is running on port ', port)
});