import { describe, test, expect } from "real-test-js";
import axios from "axios";

describe("Api tests for SWAPI", () => {
  test("Get Luke Skywalker", async () => {
    const response = await axios.get(`https://swapi.dev/api/people/1/`);
    expect(response.data.name).toBeEqual("Luke Skywalker");
    expect(response.data.height).toBeNotNull();
    expect(response.data.films).toHaveLength(4);
  });
});
