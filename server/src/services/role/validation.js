const Joi = require('joi')

module.exports.create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    role: Joi.array().items(Joi.number())
  })
}
