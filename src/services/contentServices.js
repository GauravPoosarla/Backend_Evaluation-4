const db = require("../../database/models");

const getAllCollections = async () => {
  const collections = await db.Collection.findAll();
  return collections;
};

const getAllEntriesOfCollection = async (collectionId) => {
  const entries = await db.Content.findAll({
    where: {
      collection_id: collectionId,
    },
    include: [
      {
        model: db.ContentField,
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

const createContentFields = async (contentId, fields) => {
  const contentFields = await db.ContentField.create({
    content_id: contentId,
    fields: fields,
  });
  return contentFields;
};

const createContent = async (collectionId, content) => {
  const newContent = await db.Content.create({
    collection_id: collectionId,
    values: content,
  });
  return newContent;
};

const getContentFields = async (contentId) => {
  const contentFields = await db.ContentField.findAll({
    where: {
      content_id: contentId,
    },
  });
  return contentFields;
};

const updateContentField = async (contentId, values) => {
  const updatedContent = await db.ContentField.update(
    {
      values,
    },
    {
      where: {
        content_id: contentId,
      },
    }
  );
  return updatedContent;
};

module.exports = {
  getAllCollections,
  getAllEntriesOfCollection,
  createCollection,
  createContentFields,
  createContent,
  getContentFields,
  updateContentField,
};
