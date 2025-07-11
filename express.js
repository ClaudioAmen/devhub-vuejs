const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Prova funzionante");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://claudioamendola:mt4p3bxT066cl5N0@clustercorso.836vmvs.mongodb.net/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Questo è un pre compilato di MongoDb serve per fare il collegamento alle chiamate API del database