const db = require("../../database/models");
const {
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
} = require("../../src/services/contentServices");

jest.mock("../../database/models", () => ({
  Collection: {
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findOne: jest.fn(),
  },
  Content: {
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findOne: jest.fn(),
  },
  ContentField: {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    destroy: jest.fn(),
    update: jest.fn(),
  },
}));

describe("collectionService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllCollections", () => {
    it("should return all collections", async () => {
      db.Collection.findAll.mockResolvedValue([{ id: 1, name: "collection1" }]);
      const result = await getAllCollections();
      expect(db.Collection.findAll).toHaveBeenCalled();
      expect(result).toEqual([{ id: 1, name: "collection1" }]);
    });

    it("should return an empty array if there are no collections", async () => {
      db.Collection.findAll.mockResolvedValue([]);
      const result = await getAllCollections();
      expect(db.Collection.findAll).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });

  describe("getAllEntriesOfCollection", () => {
    it("should return all entries of a collection", async () => {
      db.Content.findAll.mockResolvedValue([
        { id: 1, collection_id: 1, values: {} },
      ]);
      const result = await getAllEntriesOfCollection(1);
      expect(db.Content.findAll).toHaveBeenCalledWith({
        where: { collection_id: 1 },
        include: [{ model: db.Collection }],
      });
      expect(result).toEqual([{ id: 1, collection_id: 1, values: {} }]);
    });

    it("should return an empty array if there are no entries for the collection", async () => {
      db.Content.findAll.mockResolvedValue([]);
      const result = await getAllEntriesOfCollection(1);
      expect(db.Content.findAll).toHaveBeenCalledWith({
        where: { collection_id: 1 },
        include: [{ model: db.Collection }],
      });
      expect(result).toEqual([]);
    });
  });

  describe("createCollection", () => {
    it("should create a new collection and return it", async () => {
      db.Collection.create.mockResolvedValue({
        id: 1,
        collection_name: "collection1",
      });
      const result = await createCollection("collection1");
      expect(db.Collection.create).toHaveBeenCalledWith({
        collection_name: "collection1",
      });
      expect(result).toEqual({ id: 1, collection_name: "collection1" });
    });
  });

  describe("updateCollection", () => {
    it("should update an existing collection and return it", async () => {
      db.Collection.update.mockResolvedValue(1);
      db.Collection.findOne.mockResolvedValue({
        id: 1,
        collection_name: "collection1",
        Content: [{ values: {} }],
      });
      const result = await updateCollection(1, "newName");
      expect(db.Collection.update).toHaveBeenCalledWith(
        { collection_name: "newName" },
        { where: { id: 1 } }
      );
      expect(db.Collection.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
        include: [{ model: db.Content, attributes: ["values"] }],
      });
      expect(result).toEqual({
        id: 1,
        collection_name: "newName",
        Content: [{ values: {} }],
      });
    });
  });
});
