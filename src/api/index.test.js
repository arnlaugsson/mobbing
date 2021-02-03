const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return 404 status code", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(404);
  });
});

describe("GET /api/calculate", () => {
  it("should return 4 when asked about two plus two", async () => {
    const res = await request(app).get("/api/calculate/2+2");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({"calculated": 4});
  });
});