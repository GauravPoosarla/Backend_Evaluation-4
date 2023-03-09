const contentRouter = require("express").Router();
const contentController = require("../controllers/ContentController");

contentRouter.get("/all-collections", contentController.getAllCollections);
contentRouter.get(
  "/all-entries-collection/:collectionId",
  contentController.getAllEntriesOfCollection
);
contentRouter.post("/create-collection", contentController.createCollection);
contentRouter.post(
  "/create-content-fields/:contentId",
  contentController.createContentFields
);
contentRouter.get(
  "get-content-fields/:contentId",
  contentController.getContentFields
);
contentRouter.post(
  "/create-content:collectionId",
  contentController.createContent
);
contentRouter.put(
  "/update-content-field/:contentId",
  contentController.updateContentField
);

module.exports = contentRouter;
