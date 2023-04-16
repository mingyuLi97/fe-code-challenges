import { describe, it, expect } from "vitest";
import ObjectCreate from ".";

describe("Object-create", () => {
  it("should create new object", () => {
    const obj = { foo: 1, bar: 2 };
    const a = ObjectCreate(obj);
    expect(a.__proto__).toBe(obj);
    expect(a.foo).toBe(obj.foo);
    expect(a).not.toBe(obj);
  });
  it("should not effect origin object", () => {
    const obj = { foo: 1, bar: 2 };
    const a = ObjectCreate(obj);
    a.foo = 2;
    expect(a).toEqual({ foo: 2 });
    expect(obj).toEqual({ foo: 1, bar: 2 });
    expect(a.bar).toBe(obj.bar);
  });
  it("toString is undefined", () => {
    // expect(ObjectCreate(null).toString).toBeUndefined();
  });
  it("Object prototype may only be an Object or null", () => {
    expect(() => ObjectCreate(1)).toThrowError(TypeError);
    expect(() => ObjectCreate("")).toThrowError(TypeError);
    expect(() => ObjectCreate(true)).toThrowError(TypeError);
    expect(() => ObjectCreate(undefined)).toThrowError(TypeError);
  });
});
