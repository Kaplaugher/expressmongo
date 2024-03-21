const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

// update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

module.exports = router;
