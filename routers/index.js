const router = require("express").Router();
const productRoute = require("./product_router");

router.use("/product", productRoute);

module.exports = router;