const path = require("path");
const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrder);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
