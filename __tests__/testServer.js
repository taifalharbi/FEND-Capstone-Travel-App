import request from "supertest";
import { app } from "../src/server/server";

describe("Server", () => {
  // ...

  it("should respond with an error for an invalid location", async () => {
    const response = await request(app).get("/api/weather").query({
      location: "invalidLocation",
      date: "2023-06-22",
    });

    const data = response.body;

    expect(response.status).toBe(404);
    expect(data.error).toBe("Location not found");
  });

  // ...
});
