const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  afterAll(() => {
    app.close();
  });

  it("should return Hello, CI/CD World!", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, CI/CD World!");
  });
});
