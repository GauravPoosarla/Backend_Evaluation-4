const contentServices = require("../services/contentServices");

const getAllCollections = async (req, res) => {
  try {
    const collections = await contentServices.getAllCollections();
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
  try {
    const { collectionName } = req.body;
    const collection = await contentServices.createCollection(collectionName);
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createContentFields = async (req, res) => {
  //fix
  try {
    const { contentId } = req.params;
    const { fields } = req.body;
    console.log(fields);
    const contentFields = await contentServices.createContentFields(
      contentId,
      fields
    );
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

const getContentFields = async (req, res) => {
  try {
    const { contentId } = req.params;
    const contentFields = await contentServices.getContentFields(contentId);
    res.status(200).json(contentFields);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateContentField = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { values } = req.body;
    const updatedContent = await contentServices.updateContentField(
      contentId,
      values
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
  createContentFields,
  createContent,
  getContentFields,
  updateContentField,
};
