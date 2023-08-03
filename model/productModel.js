const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true, min: [1, "Wrong min price"] },
    rating: {
        type: Number,
        min: [0, "Wrong min rating"],
        max: [5, "wrong max rating"],
    },
    description: { type: String },
    discountPercentage: { type: Number, max: [50, "Wrong max discount percent"] },
    stock: { type: Number },
    brand: { type: String, required: true },
    category: { type: String },
    thumbnail: { type: String },
    images: [{ type: String }],
});

exports.Product = mongoose.model("Product", productSchema);
