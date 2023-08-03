const model = require("../model/productModel");
const Product = model.Product;

/**
 * ! CREATE
 */
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);

        const createdProduct = await product.save();

        res.send(createdProduct);
    } catch (error) {
        res.send(error);
    }
};

/**
 * ! READ
 */

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.send(error);
    }
};

exports.getProduct = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const product = await Product.findById(id);

        res.send(product);
    } catch (error) {
        res.send(error);
    }
};

/**
 * ! UPDATE -> (PUT,PATCH)
 */

exports.replaceProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const replaceProduct = await Product.findOneAndReplace(
            { _id: id },
            req.body,
            { new: true }
        );
        res.send(replaceProduct);
    } catch (error) {
        res.send(error);
    }
};

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, req.body);
        res.send(product);
    } catch (error) {
        res.send(error);
    }
};

/**
 * ! DELETE
 */

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteProduct = await Product.findByIdAndDelete({ _id: id });
        res.send(deleteProduct);
    } catch (error) {
        res.send(error);
    }
};
