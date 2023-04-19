import { describe, it, expect } from "vitest";
import fn from ".";

describe("extends-string", () => {
  it("extends string", () => {
    expect(fn("5a6we1y0x")).toBe("aaaaawewewewewewey");
    expect(fn("50a6we8y20x")).toBe(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaweweweweweweyyyyyyyyxxxxxxxxxxxxxxxxxxxx"
    );
    expect(fn("")).toBe("");
  });
});
