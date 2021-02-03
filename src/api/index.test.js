const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it("should return 404 status code", async () => {
      const res = await request(app).get("/");
      expect(res.status).toBe(404);
    });
  });