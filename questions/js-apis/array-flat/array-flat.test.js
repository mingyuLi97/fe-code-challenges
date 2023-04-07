import { describe, it, expect } from "vitest";
import fn from ".";

describe("array-flat", () => {
  describe("Array flat", () => {
    Array.prototype.flat = fn;

    it("flattens a nested array to a given depth", () => {
      const arr = [1, 2, [3, 4, [5, 6]]];

      expect(arr.flat()).toEqual([1, 2, 3, 4, [5, 6]]);
      expect(arr.flat(1)).toEqual([1, 2, 3, 4, [5, 6]]);
      expect(arr.flat(2)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(arr.flat(3)).toEqual([1, 2, 3, 4, 5, 6]);

      const arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
      expect(arr2.flat(2)).toEqual([1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]);
      expect(arr2.flat(Infinity)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("removes empty slots", () => {
      const arr = [1, 2, , , 5];
      const flatArr = arr.flat();
      expect(flatArr).toEqual([1, 2, 5]);
    });
  });
});
