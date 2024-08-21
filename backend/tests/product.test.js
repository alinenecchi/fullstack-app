const request = require("supertest");
const app = require("../src/index"); // Ajuste o caminho conforme necessário

describe("POST /api/products/import", () => {
  it("should import products successfully", async () => {
    const response = await request(app)
      .post("/api/products/import")
      .attach("file", "path/to/your/csvfile.csv");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Products imported successfully");
  });
});
