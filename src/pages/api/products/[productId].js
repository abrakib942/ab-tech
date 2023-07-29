const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

async function handler(req, res) {
  try {
    await client.connect();

    const productCollection = await client.db("ab-tech").collection("products");

    if (req.method === "GET") {
      const { productId } = req.query;
      const product = await productCollection.findOne({
        _id: new ObjectId(productId),
      });

      res.send({ message: "success", status: 200, data: product });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default handler;
