const router = require("express").Router();
const productController = require("../controllers/product_controller");
const {
    addProductScheme
} = require("../validations/product_validation");

router.post("/", addProductScheme, productController.add);
router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.put("/:id", addProductScheme, productController.update);
router.delete("/:id", productController.delete);

module.exports = router;