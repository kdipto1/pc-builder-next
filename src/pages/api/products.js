const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;

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
    const productsCollection = client.db("pc-builder").collection("products");
    if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();
      res.json({ message: "success", status: 200, data: products });
    }
    if (req.method === "POST") {
      const product = req.body;
      const result = await productsCollection.insertOne(product);
      res.json({ message: "success", status: 200, data: result });
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;