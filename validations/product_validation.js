const Joi = require("joi")
const {
    validateRequest
} = require("../middlewares/validate_request");

const addProductValidation = Joi.object().keys({
    name: Joi.string().required(),
    qty: Joi.number().min(0).required(),
    picture: Joi.string().required(),
    expiredAt: Joi.date().required()
});

const addProductScheme = (req, res, next) => {
    validateRequest(req, res, next, addProductValidation);
}

module.exports = {
    addProductScheme
}