import { describe, it, expect } from "vitest";
import _instanceof from ".";

describe("instanceof", () => {
  it("_instanceof to be true", () => {
    const arr = [];
    expect(_instanceof(arr, Array)).toBe(true);
    expect(_instanceof(arr, String)).toBe(false);
  });

  it("class extends", () => {
    class Parent {}
    class Child extends Parent {}
    const child = new Child();
    const parent = new Parent();
    expect(_instanceof(child, Child)).toBe(true);
    expect(_instanceof(child, Parent)).toBe(true);
    expect(_instanceof(parent, Child)).toBe(false);
    expect(_instanceof(parent, Parent)).toBe(true);
  });
});
