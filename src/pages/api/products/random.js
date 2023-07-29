import { MongoClient, ServerApiVersion } from "mongodb";

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
      const randomProducts = await productsCollection
        .aggregate([{ $sample: { size: 6 } }])
        .toArray();

      res.json({ message: "success", status: 200, data: randomProducts });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error", status: 500 });
  } finally {
    // await client.close();
  }
}

export default run;
