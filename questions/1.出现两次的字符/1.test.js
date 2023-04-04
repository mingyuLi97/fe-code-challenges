import { describe, expect, it } from "vitest";
import { findFirstTwice } from ".";

describe("findFirstTwice", () => {
  it("find true index", () => {
    expect(findFirstTwice(" ")).toBe(-1);
    expect(findFirstTwice("abbc")).toBe(1);
    expect(findFirstTwice("bbc")).toBe(0);
    expect(findFirstTwice('abbbcdde')).toBe(5)
  });
});
