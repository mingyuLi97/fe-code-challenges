import { describe, it, expect } from "vitest";
import matchRepeatedChars from ".";

describe("repeated-chars", () => {
  it("match", () => {
    expect(matchRepeatedChars("abcdaaabbccccdddefgaaa")).toBe(4);
    expect(matchRepeatedChars("abcd")).toBe(0);
    expect(matchRepeatedChars("")).toBe(0);
    expect(matchRepeatedChars("aa")).toBe(1);
  });
});
