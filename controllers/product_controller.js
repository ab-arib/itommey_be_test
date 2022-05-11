const productService = require("../services/product_sevice");
const logger = require("../utils/logger");

const productController = {};

productController.add = async (req, res, next) => {
    try {
        logger.info(`Add new product, request = ${JSON.stringify(req.body)}`);
        // create new product
        const product = await productService.add(req.body);
        logger.info(`Add new product success`);
        return res.status(200).json({
            status: "success",
            statusCode: 200,
            message: `Add new product success`,
            data: product
        });
    } catch (e) {
        logger.error(`Internal server error, e = ${e}`);
        return res.status(500).json({
            status: "failed",
            statusCode: 500,
            message: "Internal server error",
            error: e,
        });
    }
}

productController.getAll = async (req, res, next) => {
    try {
        logger.info(`Get all product, request = ${JSON.stringify(req.query)}`);
        // construct query
        const order = await req.query.sortBy ? req.query.sortBy : 'id';
        const direction = await req.query.direction ? req.query.direction : 'ASC';
        const limit = await req.query.limit ? req.query.limit : 100;
        const offset = await req.query.offset ? req.query.offset : 0;
        // get data
        const product = await productService.getAll(order, direction, limit, offset);
        logger.info(`Get all product success`);
        return res.status(200).json({
            status: "success",
            statusCode: 200,
            message: `Get all product success`,
            data: product
        });
    } catch (e) {
        logger.error(`Internal server error, e = ${e}`);
        return res.status(500).json({
            status: "failed",
            statusCode: 500,
            message: "Internal server error",
            error: e,
        });
    }
}

productController.getById = async (req, res, next) => {
    try {
        logger.info(`Get product by id, request = ${req.params.id}`);
        // get data
        const product = await productService.getById(req.params.id);
        if (!product) {
            logger.error(`Get product by id failed, data not found, request = ${req.params.id}`);
            return res.status(404).json({
                status: "failed",
                statusCode: 404,
                message: `Product by id = ${req.params.id} not found`,
                data: {}
            });
        }
        logger.info(`Get product by id success`);
        return res.status(200).json({
            status: "success",
            statusCode: 200,
            message: `Get product by id = ${req.params.id} success`,
            data: product
        });
    } catch (e) {
        logger.error(`Internal server error, e = ${e}`);
        return res.status(500).json({
            status: "failed",
            statusCode: 500,
            message: "Internal server error",
            error: e,
        });
    }
}

productController.update = async (req, res, next) => {
    try {
        logger.info(`Update product, request = id: ${req.params.id} ${JSON.stringify(req.body)}`);
        // Get data
        const productData = await productService.getById(req.params.id);
        if (!productData) {
            logger.error(`Update product failed, data not found, request = ${req.params.id}`);
            return res.status(404).json({
                status: "failed",
                statusCode: 404,
                message: `Product by id = ${req.params.id} not found`,
                data: {}
            });
        }
        // update data
        const product = await productService.update(productData, req.body);
        logger.info(`Update product success`);
        return res.status(200).json({
            status: "success",
            statusCode: 200,
            message: `Update product by id = ${req.params.id} success`,
            data: product
        });
    } catch (e) {
        logger.error(`Internal server error, e = ${e}`);
        return res.status(500).json({
            status: "failed",
            statusCode: 500,
            message: "Internal server error",
            error: e,
        });
    }
}

productController.delete = async (req, res, next) => {
    try {
        logger.info(`Delete product, request = ${req.params.id}`);
        // Get data
        const productData = await productService.getById(req.params.id);
        if (!productData) {
            logger.error(`Delete product failed, data not found, request = ${req.params.id}`);
            return res.status(404).json({
                status: "failed",
                statusCode: 404,
                message: `Product by id = ${req.params.id} not found`,
                data: {}
            });
        }
        // delete data
        const product = await productService.delete(productData);
        logger.info(`Delete product success`);
        return res.status(200).json({
            status: "success",
            statusCode: 200,
            message: `Delete product by id = ${req.params.id} success`,
            data: product
        });
    } catch (e) {
        logger.error(`Internal server error, e = ${e}`);
        return res.status(500).json({
            status: "failed",
            statusCode: 500,
            message: "Internal server error",
            error: e,
        });
    }
}

module.exports = productController;