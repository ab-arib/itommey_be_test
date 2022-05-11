const {
    product
} = require("../models");
const logger = require("../utils/logger");

const productService = {};

productService.add = async (value) => {
    logger.info(`Add new product data`);
    const productData = await product.create({
        name: value.name,
        qty: value.qty,
        picture: value.picture,
        expiredAt: value.expiredAt
    });
    return productData;
}

productService.getAll = async (order, direction, limit, offset) => {
    logger.info(`Get all product data`);
    const productData = await product.findAll({
        order: [[order,direction]],
        limit: Number(limit),
        offset: Number(offset),
        where: {
            isActive: true
        }
    });
    return productData;
}

productService.getById = async (productId) => {
    logger.info(`Get product by id data`);
    const productData = await product.findOne({
        where: {
            id: productId,
            isActive: true
        }
    });
    return productData;
}

productService.update = async (data, value) => {
    logger.info(`Update product data`);
    const productData = await data.update({
        name: value.name,
        qty: value.qty,
        picture: value.picture,
        expiredAt: value.expiredAt
    }, {
        returning: true
    });
    return productData;
}

productService.delete = async (data) => {
    logger.info(`Delete product data`);
    const productData = await data.update({
        isActive: false
    }, {
        returning: true
    });
    return productData;
}

module.exports = productService;