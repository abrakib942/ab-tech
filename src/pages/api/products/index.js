const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ab-tech:abtech246@cluster0.estsi.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productCollection = await client.db("ab-tech").collection("products");

    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();

      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
