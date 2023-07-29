import { ObjectId } from "mongodb";
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
      const id = req.query.id;
      if (!id) {
        return res
          .status(400)
          .json({ message: "Item ID is required", status: 400 });
      }

      const product = await productsCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!product) {
        return res.status(404).json({ message: "Item not found", status: 404 });
      }

      res.json({ message: "success", status: 200, data: product });
    }

    // if (req.method === "PATCH") {
    //   const id = req.query.id;
    //   if (!id) {
    //     return res
    //       .status(400)
    //       .json({ message: "Item ID is required", status: 400 });
    //   }

    //   const product = req.body;

    //   const result = await productsCollection.updateOne(
    //     { _id: new ObjectId(id) },
    //     { $set: product }
    //   );

    //   if (result.modifiedCount === 0) {
    //     return res.status(404).json({ message: "Item not found", status: 404 });
    //   }

    //   res.json({ message: "success", status: 200, data: result });
    // }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error", status: 500 });
  } finally {
    // await client.close();
  }
}

export default run;
