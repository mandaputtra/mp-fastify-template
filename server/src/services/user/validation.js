const Joi = require('joi')

module.exports.register = {
  body: Joi.object().keys({
    email: Joi.string().email({minDomainAtoms: 2}).required(),
    password: Joi.string().min(8).required()
  })
}

module.exports.login = {
  body: Joi.object().keys({
    email: Joi.string().email({minDomainAtoms: 2}).required(),
    password: Joi.string().min(8).required()
  })
}

