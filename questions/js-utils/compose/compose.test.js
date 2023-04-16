import { describe, it, expect } from "vitest";
import { compose, asyncCompose } from ".";

describe("compose", () => {
  it("should return the input value when no functions are provided", () => {
    const input = 5;
    const result = compose()(input);
    expect(result).toEqual([input]);
  });

  it("should correctly compose a single function", () => {
    const input = 2;
    const double = (x) => x * 2;
    const result = compose(double)(input);
    expect(result).toBe(4);
  });

  it("should correctly compose multiple functions", () => {
    const input = 3;
    const double = (x) => x * 2;
    const square = (x) => x * x;
    const result = compose(square, double)(input);
    expect(result).toBe(36); // (3 * 2) ^ 2 = 36
  });

  it("should correctly compose functions with multiple arguments", () => {
    const add = (x, y) => x + y;
    const double = (x) => x * 2;
    const result = compose(double, add)(2, 3);
    expect(result).toBe(10); // (2 + 3) * 2 = 10
  });
});

describe("asyncCompose", () => {
  it("should return the input value when no functions are provided", async () => {
    const input = 5;
    const result = await asyncCompose()(input);
    expect(result).toEqual(5);
  });

  it("should correctly compose a single async function", async () => {
    const input = 2;
    const asyncDouble = async (x) => x * 2;
    const result = await asyncCompose(asyncDouble)(input);
    expect(result).toBe(4);
  });

  it("should correctly compose multiple async functions", async () => {
    const input = 3;
    const asyncDouble = async (x) => x * 2;
    const asyncSquare = async (x) => x * x;
    const result = await asyncCompose(asyncSquare, asyncDouble)(input);
    expect(result).toBe(36); // (3 * 2) ^ 2 = 36
  });

  it("should correctly compose mixed sync and async functions", async () => {
    const input = 3;
    const double = (x) => x * 2;
    const asyncSquare = async (x) => x * x;
    const result = await asyncCompose(asyncSquare, double)(input);
    expect(result).toBe(36); // (3 * 2) ^ 2 = 36
  });

  it("should correctly compose functions with multiple arguments", async () => {
    const asyncAdd = async (x, y) => x + y;
    const double = (x) => x * 2;
    const result = await asyncCompose(double, asyncAdd)(2, 3);
    expect(result).toBe(10); // (2 + 3) * 2 = 10
  });
});
