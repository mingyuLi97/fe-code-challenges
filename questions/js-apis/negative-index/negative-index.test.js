import { describe, it, expect } from "vitest";
import negativeIndex from ".";

describe("negative-index", () => {
  it("allow negative index", () => {
    expect(negativeIndex([1, 2, 3, 4, 5])[-1]).toBe(5);
    expect(negativeIndex([1, 2, 3, 4, 5])[-2]).toBe(4);
    expect(negativeIndex([1, 2, 3, 4, 5])[1]).toBe(2);
    expect(negativeIndex([1, 2, 3, 4, 5])[-6]).toBeUndefined();
  });
});
