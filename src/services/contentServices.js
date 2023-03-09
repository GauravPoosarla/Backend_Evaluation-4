const db = require("../../database/models");

const getAllCollections = async () => {
  const collections = await db.Collection.findAll({
    include: [
      {
        model: db.Content,
      },
    ],
  });
  return collections;
};

const getAllEntriesOfCollection = async (collectionId) => {
  const entries = await db.Content.findAll({
    where: {
      collection_id: collectionId,
    },
    include: [
      {
        model: db.Collection,
      },
    ],
  });
  return entries;
};

const createCollection = async (collectionName) => {
  const collection = await db.Collection.create({
    collection_name: collectionName,
  });
  return collection;
};

const updateCollection = async (collectionId, collectionName) => {
  await db.Collection.update(
    {
      collection_name: collectionName,
    },
    {
      where: {
        id: collectionId,
      },
    }
  );
  const updatedCollection = await db.Collection.findOne({
    where: {
      id: collectionId,
    },
    include: [
      {
        model: db.Content,
        attributes: ["values"],
      },
    ],
  });
  return updatedCollection;
};

const createContentFields = async (contentId, field) => {
  const contentFields = await db.ContentField.create({
    content_id: contentId,
    fields: field,
  });
  return contentFields;
};

const getContentFields = async (contentId) => {
  const contentFields = await db.ContentField.findAll({
    where: {
      content_id: contentId,
    },
  });
  return contentFields;
};

const deleteContentField = async (fieldId) => {
  await db.ContentField.destroy({
    where: {
      id: fieldId,
    },
  });
};

const createContent = async (collectionId, content) => {
  const newContent = await db.Content.create({
    collection_id: collectionId,
    values: content,
  });
  return newContent;
};

module.exports = {
  getAllCollections,
  getAllEntriesOfCollection,
  createCollection,
  updateCollection,
  createContentFields,
  createContent,
  getContentFields,
  deleteContentField,
};
