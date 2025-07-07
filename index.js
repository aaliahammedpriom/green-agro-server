const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())



const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    const productsCollection = client.db("green-agroDB").collection("products");
    const addToCartCollection = client.db("green-agroDB").collection("addtocart");

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");


        // get all products
        app.get('/products', async (req, res) => {
            const result = await productsCollection.find().toArray();
            res.send(result)

        })
        // get single products
        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await productsCollection.findOne(query);
            res.send(result)

        })
        // add products
        app.post('/products', async (req, res) => {
            console.log(req.body)
            const result = await productsCollection.insertOne(req.body)
            console.log(result.insertedId)
            res.send(result)

        })

        //get user cart
        app.get('/addtocart/:email', async (req, res) => {
            const result = await addToCartCollection.find({ email: req.params.email }).toArray()

            return res.send(result)

        })
        // delete user cart 
        app.delete('/addtocart/:email', async (req, res) => {
            const result = await addToCartCollection.deleteMany({ email: req.params.email });
            return res.send(result)
        })

        // add to cart post 
        app.post('/addtocart', async (req, res) => {

            const find = await addToCartCollection.findOne({ email: req.query.email, product_id: req.query.product_id });

            if (find) {
                if (req.query.decrease) {

                    if (find.quantity > 0) {
                        const updated = await addToCartCollection.updateOne(
                            { email: req.query.email, product_id: req.query.product_id },
                            { $inc: { quantity: -1 } }
                        );
                        return res.send({ message: "Quantity increased", updated })
                    }
                    else {
                        return res.send({ message: "Already Quantity 0" })
                    }
                }
                if (req.query.delete) {
                    const result = await addToCartCollection.deleteOne({ email: req.query.email, product_id: req.query.product_id });
                    return res.send(result)

                }
                else {
                    const updated = await addToCartCollection.updateOne(
                        { email: req.query.email, product_id: req.query.product_id },
                        { $inc: { quantity: 1 } }
                    );
                    return res.send({ message: "Quantity increased", updated })
                }
            }
            else {
                const result = await addToCartCollection.insertOne({
                    email: req.query.email,
                    product_id: req.query.product_id,
                    title: req.query.title,
                    price: req.query.price,
                    image: req.query.image,
                    unit: req.query.unit,
                    quantity: 1
                })
                return res.send({ message: "Successfully added", result })
            }
        });

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Green Agro Server is running")
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})