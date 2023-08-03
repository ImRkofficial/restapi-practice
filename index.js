const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

const productRoute = require("./routes/productRouter");

/**
 * ! ENV Variable Config
 */
dotenv.config();
const port = process.env.APP_PORT || 8000;

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log("DB Connected");
}

main().catch((err) => {
    console.log(err);
});

/**
 * !Middlewares
 */
app.use(express.json());
app.use("/product", productRoute.router);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
