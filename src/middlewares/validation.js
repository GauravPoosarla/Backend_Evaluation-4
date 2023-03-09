const schema = require("./schema");

exports.allEntriesOfCollection = async (req, res, next) => {
  try {
    const { collectionId } = req.params;
    const { error } = schema.allEntriesOfCollection.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.createCollection = async (req, res, next) => {
  try {
    const { collectionName } = req.body;
    const { error } = schema.createCollection.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.updateCollection = async (req, res, next) => {
  try {
    const { collectionId } = req.params;
    const { collectionName } = req.body;
    const { error } = schema.updateCollection.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.createContentFields = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { field } = req.body;
    const { error } = schema.createContentFields.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.getContentFields = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { error } = schema.getContentFields.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.updateContentField = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { fieldId } = req.params;
    const { field } = req.body;
    const { error } = schema.updateContentField.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.deleteContentField = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { fieldId } = req.params;
    const { error } = schema.deleteContentField.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.createContent = async (req, res, next) => {
  try {
    const { collectionId } = req.params;
    const { content } = req.body;
    const { error } = schema.createContent.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.getContent = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { error } = schema.getContent.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.updateContent = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { content } = req.body;
    const { error } = schema.updateContent.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};

exports.deleteContent = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { error } = schema.deleteContent.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    res.status(200).json(rows);
    next();
  } catch (error) {
    next(error);
  }
};
