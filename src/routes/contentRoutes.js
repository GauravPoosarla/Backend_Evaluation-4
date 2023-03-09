const contentRouter = require("express").Router();
const contentController = require("../controllers/ContentController");

contentRouter.get("/all-collections", contentController.getAllCollections);
contentRouter.get(
  "/all-entries-collection/:collectionId",
  contentController.getAllEntriesOfCollection
);
contentRouter.post("/create-collection", contentController.createCollection);
contentRouter.put(
  "/update-collection/:collectionId",
  contentController.updateCollection
);
contentRouter.post(
  "/create-content-fields/:contentId",
  contentController.createContentFields
);
contentRouter.get(
  "/get-content-fields/:contentId",
  contentController.getContentFields
);
contentRouter.put(
  "/delete-content-field/:fieldId",
  contentController.deleteContentField
);
contentRouter.post(
  "/create-content/:collectionId",
  contentController.createContent
);

module.exports = contentRouter;
