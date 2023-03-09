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
  const fieldName = await db.ContentField.findOne({
    where: {
      id: fieldId,
    },
  });
  await db.ContentField.destroy({
    where: {
      id: fieldId,
    },
  });

  const content = await db.Content.findAll();
  content.forEach(async (item) => {
    const values = item.values;
    delete values[fieldName.fields];
    await db.Content.update(
      {
        values: values,
      },
      {
        where: {
          id: item.id,
        },
      }
    );
  });
};

const updateContentField = async (contentId, fieldId, newFieldName) => {
  const fieldName = await db.ContentField.findOne({
    where: {
      field_id: fieldId,
    },
  });

  const field = fieldName.fields;
  await db.ContentField.update(
    {
      fields: newFieldName,
    },
    {
      where: {
        content_id: contentId,
        field_id: fieldId,
      },
    }
  );
  const content = await db.Content.findAll();
  content.forEach(async (item) => {
    const values = item.values;
    values[newFieldName] = values[field];
    delete values[field];
    await db.Content.update(
      {
        values: values,
      },
      {
        where: {
          id: item.id,
        },
      }
    );
  });
  return "updated field value";
};

const createContent = async (collectionId, content) => {
  const newContent = await db.Content.create({
    collection_id: collectionId,
    values: content,
  });
  return newContent;
};

const getContent = async (contentId) => {
  const content = await db.Content.findOne({
    where: {
      id: contentId,
    },
  });
  return content;
};

const updateContent = async (contentId, content) => {
  await db.Content.update(
    {
      values: content,
    },
    {
      where: {
        id: contentId,
      },
    }
  );
  const updatedContent = await db.Content.findOne({
    where: {
      id: contentId,
    },
  });
  return updatedContent;
};

module.exports = {
  getAllCollections,
  getAllEntriesOfCollection,
  createCollection,
  updateCollection,
  createContentFields,
  updateContentField,
  getContentFields,
  deleteContentField,
  createContent,
  getContent,
  updateContent,
};
