const Joi = require('joi')

module.exports.registerValidation = {
  body: Joi.object().keys({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().min(6).required()
  })
}