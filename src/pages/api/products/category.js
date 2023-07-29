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
      const { category } = req.query;
      if (!category) {
        return res
          .status(400)
          .json({ message: "Category is required", status: 400 });
      }

      const regex = new RegExp(category, "i");
      const productsByCategory = await productsCollection
        .find({ category: regex })
        .toArray();

      res.json({ message: "success", status: 200, data: productsByCategory });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error", status: 500 });
  } finally {
    // await client.close();
  }
}

export default run;
