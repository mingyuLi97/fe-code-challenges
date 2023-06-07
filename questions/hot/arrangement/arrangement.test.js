import { describe, it, expect } from "vitest";
import fn from ".";

describe("arrangement", () => {
  it("true", () => {
    expect(
      fn([
        ["a", "b"],
        ["n", "m"],
        ["0", "1"],
      ]).sort()
    ).toEqual(["an0", "am0", "an1", "am1", "bn0", "bm0", "bn1", "bm1"].sort());
  });
});
