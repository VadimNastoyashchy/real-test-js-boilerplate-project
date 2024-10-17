import { describe, test, expect } from "real-test-js";
import axios from "axios";
import { getValue } from "finder-json"


describe("Api tests for SWAPI using JSON approach", () => {
  test("Get Luke Skywalker json from the response", async () => {
    const response = await axios.get(`https://swapi.dev/api/people/1/`);
    expect(getValue(response.data, 'name')).toBeEqual("Luke Skywalker");
  });
});
