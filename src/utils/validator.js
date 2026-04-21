const Joi = require('joi');

function validateInputs(data) {
  const schema = Joi.object({
    city: Joi.string().min(2).required(),
    user: Joi.string().min(2).required(),
    save: Joi.boolean()
  });

  const { error } = schema.validate(data);

  if (error) {
    throw new Error(error.details[0].message);
  }
}

module.exports = { validateInputs };