const contentServices = require("../services/contentServices");

const getAllCollections = async (req, res) => {
  try {
    const collections = await contentServices.getAllCollections();
    // console.log(collections.dataValues);
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEntriesOfCollection = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const entries = await contentServices.getAllEntriesOfCollection(
      collectionId
    );
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCollection = async (req, res) => {
  console.log(req.body);
  try {
    const { collectionName } = req.body;
    console.log(collectionName);
    const collection = await contentServices.createCollection(collectionName);
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCollection = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const { collectionName } = req.body;
    const collection = await contentServices.updateCollection(
      collectionId,
      collectionName
    );
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createContentFields = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { field } = req.body;

    const contentFields = await contentServices.createContentFields(
      contentId,
      field
    );
    res.status(200).json(contentFields);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateContentField = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { fieldId, newFieldName } = req.body;
    const contentFields = await contentServices.updateContentField(
      contentId,
      fieldId,
      newFieldName
    );
    res.status(200).json(contentFields);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteContentField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    await contentServices.deleteContentField(fieldId);
    res.status(200).json({ message: "Content field deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getContentFields = async (req, res) => {
  try {
    const { contentId } = req.params;
    const contentFields = await contentServices.getContentFields(contentId);
    res.status(200).json(contentFields);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createContent = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const { content } = req.body;
    const newContent = await contentServices.createContent(
      collectionId,
      content
    );
    res.status(200).json(newContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getContent = async (req, res) => {
  try {
    const { contentId } = req.params;
    const content = await contentServices.getContent(contentId);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateContent = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { content } = req.body;
    const updatedContent = await contentServices.updateContent(
      contentId,
      content
    );
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCollections,
  getAllEntriesOfCollection,
  createCollection,
  updateCollection,
  createContentFields,
  deleteContentField,
  updateContentField,
  getContentFields,
  createContent,
  getContent,
  updateContent,
};
