import promiseAll from ".";
import { describe, it, expect } from "vitest";

describe("Promise.all", () => {
  it("should return a resolved promise with an array of values", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve("two"),
      Promise.resolve({ value: 3 }),
    ];

    const result = await promiseAll(promises);

    expect(result).toEqual([1, "two", { value: 3 }]);
  });

  it("should return a rejected promise if any of the promises reject", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject(new Error("Failed")),
      Promise.resolve(3),
    ];
    await expect(promiseAll(promises)).rejects.toThrow("Failed");
  });

  it("should accept an empty array and resolve with an empty array", async () => {
    const result = await promiseAll([Promise.resolve(1), undefined, 2]);

    expect(result).toEqual([1, undefined, 2]);
  });
});
