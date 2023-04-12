import { describe, test, expect } from "vitest";
import parse from ".";

describe("parse-url-query", () => {
  test("should parse URL parameters into an object", () => {
    const url = "https://example.com/?foo=bar&baz=qux";
    const expectedOutput = { foo: "bar", baz: "qux" };
    expect(parse(url)).toEqual(expectedOutput);
  });

  test("should handle empty URL", () => {
    const url = "";
    const expectedOutput = {};
    expect(parse(url)).toEqual(expectedOutput);
  });

  test("should handle URL without parameters", () => {
    const url = "https://example.com/";
    const expectedOutput = {};
    expect(parse(url)).toEqual(expectedOutput);
  });

  test("should handle URL with encoded characters", () => {
    const url = "https://example.com/?name=John%20Doe&city=San%20Francisco";
    const expectedOutput = { name: "John Doe", city: "San Francisco" };
    expect(parse(url)).toEqual(expectedOutput);
  });

  test("should handle URL with only '?' ", () => {
    const url = "https://example.com/?";
    expect(parse(url)).toEqual({});
  });

  test("should handle URL with query no value", () => {
    const url = "https://example.com/?a=1&b&c=1";
    expect(parse(url)).toEqual({ a: "1", b: "", c: "1" });
    const url1 = "https://example.com/?a=1&b=&c=1";
    expect(parse(url1)).toEqual({ a: "1", b: "", c: "1" });
  });
});
