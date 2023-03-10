const services = require("../../src/services/contentServices");
const controller = require("../../src/controllers/contentController");

describe("Content Controller", () => {
  describe("getAllCollections", () => {
    it("should return all collections", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockCollections = [
        {
          collection_id: 1,
          collection_name: "test",
        },
      ];
      services.getAllCollections = jest.fn().mockResolvedValue(mockCollections);
      await controller.getAllCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockCollections);
    });
    it("should return error if getAllCollections fails", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error("error");
      services.getAllCollections = jest.fn().mockRejectedValue(mockError);
      await controller.getAllCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: mockError.message });
    });
  });
  describe("getAllEntriesOfCollection", () => {
    it("should return all entries of collection", async () => {
      const req = {
        params: {
          collectionId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockEntries = [
        {
          content_id: 1,
          collection_id: 1,
          content_fields: {
            field_id: 1,
            content_id: 1,
            fields: {
              title: "test",
            },
          },
        },
      ];
      services.getAllEntriesOfCollection = jest
        .fn()
        .mockResolvedValue(mockEntries);
      await controller.getAllEntriesOfCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockEntries);
    });
    it("should return error if getAllEntriesOfCollection fails", async () => {
      const req = {
        params: {
          collectionId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error("error");
      services.getAllEntriesOfCollection = jest
        .fn()
        .mockRejectedValue(mockError);
      await controller.getAllEntriesOfCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: mockError.message });
    });
  });
  describe("createCollection", () => {
    it("should create a collection", async () => {
      const req = {
        body: {
          collectionName: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockCollection = {
        collection_id: 1,
        collection_name: "test",
      };
      services.createCollection = jest.fn().mockResolvedValue(mockCollection);
      await controller.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockCollection);
    });
    it("should return error if createCollection fails", async () => {
      const req = {
        body: {
          collectionName: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error("error");
      services.createCollection = jest.fn().mockRejectedValue(mockError);
      await controller.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: mockError.message });
    });
    it("should return error if collectionName is not provided", async () => {
      const req = {
        body: {},
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await controller.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "error",
      });
    });
    it("should return error if collectionName is empty", async () => {
      const req = {
        body: {
          collectionName: "",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await controller.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "error",
      });
    });
  });
  describe("updateCollection", () => {
    it("should update a collection", async () => {
      const req = {
        params: {
          collectionId: 1,
        },
        body: {
          collection_name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockCollection = {
        collection_id: 1,
        collection_name: "test",
      };
      services.updateCollection = jest.fn().mockResolvedValue(mockCollection);
      await controller.updateCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockCollection);
    });
    it("should return error if updateCollection fails", async () => {
      const req = {
        params: {
          collectionId: 1,
        },
        body: {
          collection_name: "test",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error("error");
      services.updateCollection = jest.fn().mockRejectedValue(mockError);
      await controller.updateCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: mockError.message });
    });
  });
  describe("deleteContent", () => {
    it("should delete a content", async () => {
      const req = {
        params: {
          contentId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      services.deleteContent = jest.fn().mockResolvedValue();
      await controller.deleteContent(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Content deleted" });
    });
    it("should return error if deleteContent fails", async () => {
      const req = {
        params: {
          contentId: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockError = new Error("error");
      services.deleteContent = jest.fn().mockRejectedValue(mockError);
      await controller.deleteContent(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: mockError.message });
    });
  });
});
