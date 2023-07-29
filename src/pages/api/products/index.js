const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = client.db("pc-builder").collection("products");
    if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();
      res.json({ message: "success", status: 200, data: products });
    }
    // if (req.method === "POST") {
    //   const product = req.body;
    //   const result = await productsCollection.insertOne(product);
    //   res.json({ message: "success", status: 200, data: result });
    // }
  } catch (error) {
    console.log(error.message);
  } finally {
    // await client.close();
  }
}

export default run;
