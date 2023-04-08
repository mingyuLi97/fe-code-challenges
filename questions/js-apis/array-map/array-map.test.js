import { describe, it, expect } from "vitest";
import fn from ".";

describe("Array.prototype.map", () => {
  it("Array.prototype.map", () => {
    Array.prototype.map = fn;
    const arr = [1, 2, 3, 4];

    expect(arr.map((item, id, array) => [item * item, id, array])).toEqual([
      [1, 0, arr],
      [4, 1, arr],
      [9, 2, arr],
      [16, 3, arr],
    ]);
  });
});
