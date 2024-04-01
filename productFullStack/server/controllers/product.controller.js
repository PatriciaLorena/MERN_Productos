const { ProductModel } = require("../models/product.model");

module.exports = {
    getAllProducts: (req, res) => {
        ProductModel.find()
            .then((allProducts) => res.status(201).json({ products: allProducts }))
            .catch((err) =>
                res.status(400).json({ message: "something went wrong", error: err })
            );
    },
    getOneProductById: (req, res) => {
        ProductModel.findOne({ _id: req.params.id })
            .then((oneSingleProduct) => res.json({ products: oneSingleProduct }))
            .catch((err) =>
                res.status(400).json({ message: "something went wrong", error: err })
            );
    },
    createNewProduct: (req, res) => {
        ProductModel.create(req.body)
        .then((newlyCreatedProduct) => res.status(201).json({ products: newlyCreatedProduct }))
            .catch((err) =>
                res.status(400).json({ message: "something went wrong", error: err })
            );
    },

}

    