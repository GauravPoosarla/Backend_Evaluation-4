const Joi = require("joi");

const allEntriesOfCollection = Joi.object({
  collectionId: Joi.number().integer().required(),
});

const createCollection = Joi.object({
  collectionName: Joi.string().required(),
});

const updateCollection = Joi.object({
  collectionId: Joi.number().integer().required(),
  collectionName: Joi.string().required(),
});

const createContentFields = Joi.object({
  contentId: Joi.number().integer().required(),
  field: Joi.string().required(),
});

module.exports = {
  allEntriesOfCollection,
  createCollection,
  updateCollection,
  createContentFields,
};
