import { describe, it, expect } from "vitest";
import ES5Map from ".";

describe("es5-map", () => {
  it("set and get", () => {
    const map = new ES5Map();
    const map2 = new ES5Map();
    const obj = {};

    map.set("key1", "value1");
    map.set("key2", "value2");
    map.set(obj, "value3");
    map2.set(obj, "value4");

    expect(map.get("key1")).toBe("value1");
    expect(map.get("key2")).toBe("value2");
    expect(map.get(obj)).toBe("value3");
    expect(map2.get(obj)).toBe("value4");
  });

  it("has", () => {
    const map = new ES5Map();
    map.set("key1", "value1");

    expect(map.has("key1")).toBe(true);
    expect(map.has("key2")).toBe(false);
  });

  it("delete", () => {
    const map = new ES5Map();
    map.set("key1", "value1");
    map.set("key2", "value2");

    map.delete("key1");
    expect(map.has("key1")).toBe(false);
    expect(map.get("key1")).toBeUndefined();
  });
});
