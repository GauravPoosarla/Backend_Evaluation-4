const db = require("../../database/models");
const services = require("../../src/services/contentServices");

describe("Content Services", () => {
  describe("getAllCollections", () => {
    it("should return all collections", async () => {
      db.Collection.findAll = jest.fn().mockResolvedValue([
        {
          id: 1,
          collection_name: "test",
          createdAt: "2020-10-01T00:00:00.000Z",
          updatedAt: "2020-10-01T00:00:00.000Z",
          Contents: [
            {
              id: 1,
              values: "test",
              collection_id: 1,
              content_name: "test",
              values: {},
              createdAt: "2020-10-01T00:00:00.000Z",
              updatedAt: "2020-10-01T00:00:00.000Z",
            },
          ],
        },
      ]);
      const collections = await services.getAllCollections();
      expect(collections).toHaveLength(1);
    });
    it("should return an empty array if no collections exist", async () => {
      db.Collection.findAll = jest.fn().mockResolvedValue([]);
      const collections = await services.getAllCollections();
      expect(collections).toHaveLength(0);
    });
  });
  describe("getAllEntriesOfCollection", () => {
    it("should return all entries of a collection", async () => {
      db.Content.findAll = jest.fn().mockResolvedValue([
        {
          id: 1,
          values: "test",
          collection_id: 1,
          content_name: "test",
          values: {},
          createdAt: "2020-10-01T00:00:00.000Z",
          updatedAt: "2020-10-01T00:00:00.000Z",
        },
      ]);
      const entries = await services.getAllEntriesOfCollection(1);
      expect(entries).toHaveLength(1);
    });
    it("should return an empty array if no entries exist", async () => {
      db.Content.findAll = jest.fn().mockResolvedValue([]);
      const entries = await services.getAllEntriesOfCollection(1);
      expect(entries).toHaveLength(0);
    });
  });
  describe("createCollection", () => {
    it("should create a collection", async () => {
      db.Content.create = jest.fn().mockResolvedValue({
        id: 1,
        collection_name: "test",
        createdAt: "2020-10-01T00:00:00.000Z",
        updatedAt: "2020-10-01T00:00:00.000Z",
      });
      const collection = await services.createCollection("test");
      expect(collection).toHaveProperty("id");
    });
  });
  describe("updateCollection", () => {
    it("should update a collection", async () => {
      db.Collection.update = jest.fn().mockResolvedValue([1]);
      db.Collection.findOne = jest.fn().mockResolvedValue({
        id: 1,
        collection_name: "test",
        createdAt: "2020-10-01T00:00:00.000Z",
        updatedAt: "2020-10-01T00:00:00.000Z",
        Contents: [
          {
            id: 1,
            values: "test",
            collection_id: 1,
            content_name: "test",
            values: {},
            createdAt: "2020-10-01T00:00:00.000Z",
            updatedAt: "2020-10-01T00:00:00.000Z",
          },
        ],
      });
      const collection = await services.updateCollection(1, "test");
      expect(collection).toHaveProperty("id");
    });
  });
  describe("createContentField", () => {
    it("should create a content field", async () => {
      db.ContentField.create = jest.fn().mockResolvedValue({
        id: 1,
        field_name: "test",
      });
      const field = await services.createContentFields("test");
      expect(field).toHaveProperty("id");
    });
  });
  describe("getContentFields", () => {
    it("should return all content fields", async () => {
      db.ContentField.findAll = jest.fn().mockResolvedValue([
        {
          id: 1,
          field_name: "test",
        },
      ]);
      const fields = await services.getContentFields();
      expect(fields).toHaveLength(1);
    });
    it("should return an empty array if no fields exist", async () => {
      db.ContentField.findAll = jest.fn().mockResolvedValue([]);
      const fields = await services.getContentFields();
      expect(fields).toHaveLength(0);
    });
  });
  describe("createContent", () => {
    it("should create a content", async () => {
      db.Content.create = jest.fn().mockResolvedValue({
        id: 1,
        values: "test",
        collection_id: 1,
        content_name: "test",
        values: {},
        createdAt: "2020-10-01T00:00:00.000Z",
        updatedAt: "2020-10-01T00:00:00.000Z",
      });
      const content = await services.createContent(1, "test", {});
      expect(content).toHaveProperty("id");
    });
    it("should return an error if no collection exists", async () => {
      db.Content.create = jest.fn().mockResolvedValue(null);
      const content = await services.createContent(1, "test", {});
      expect(content).toBeNull();
    });
  });
  describe("updateContent", () => {
    it("should update a content", async () => {
      db.Content.update = jest.fn().mockResolvedValue([1]);
      db.Content.findOne = jest.fn().mockResolvedValue({
        id: 1,
        values: "test",
        collection_id: 1,
        content_name: "test",
        values: {},
        createdAt: "2020-10-01T00:00:00.000Z",
        updatedAt: "2020-10-01T00:00:00.000Z",
      });
      const content = await services.updateContent(1, "test", {});
      expect(content).toHaveProperty("id");
    });
    it("should return an error if no content exists", async () => {
      db.Content.update = jest.fn().mockResolvedValue([0]);
      db.Content.findOne = jest.fn().mockResolvedValue(null);
      const content = await services.updateContent(1, "test", {});
      expect(content).toBeNull();
    });
  });
  describe("getContent", () => {
    it("should return a content", async () => {
      db.Content.findOne = jest.fn().mockResolvedValue({
        id: 1,
        values: "test",
        collection_id: 1,
        content_name: "test",
        values: {},
        createdAt: "2020-10-01T00:00:00.000Z",
        updatedAt: "2020-10-01T00:00:00.000Z",
      });
      const content = await services.getContent(1);
      expect(content).toHaveProperty("id");
    });
    it("should return an error if no content exists", async () => {
      db.Content.findOne = jest.fn().mockResolvedValue(null);
      const content = await services.getContent(1);
      expect(content).toBeNull();
    });
  });
});
