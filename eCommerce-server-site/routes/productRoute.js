const express = require("express");
const productRouter = express.Router();
const { createProduct, getAllProducts, getSingleProduct ,updateProduct, deleteProduct } = require("../controllers/productController");
const { isAuthenticated, authorizedRole } = require("../middlewares/auth");


// importing product routes

// productRouter.route("/create-product").post(createProduct);
productRouter.post("/create-product", isAuthenticated, authorizedRole("admin"), createProduct);
productRouter.get("/all-products", isAuthenticated, getAllProducts);
productRouter.get("/single-product/:id",  getSingleProduct);
productRouter.put("/update-product/:id", isAuthenticated, updateProduct);
productRouter.delete("/delete-product/:id", isAuthenticated, deleteProduct);



/* 
--------------- product routes connection checking ---------------
*/
productRouter.get("/product-router", (req, res) => {
  res.send("Connected to eCommerce's product routes successfully....");
});

module.exports = productRouter;
