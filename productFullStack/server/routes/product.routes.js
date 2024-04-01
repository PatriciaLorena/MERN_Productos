const express = require("express");
/*
const {
    person_hello
} = require("../controllers/person.controller");
*/

const ProductController = require("../controllers/product.controller");

const ProductRouter = express.Router();

//esto parte de la ruta base /api/person
ProductRouter.post("/", ProductController.createNewProduct);
ProductRouter.get("/", ProductController.getAllProducts);
ProductRouter.get("/:id", ProductController.getOneProductById);


module.exports = ProductRouter;