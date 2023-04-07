import { describe, it, expect } from "vitest";
import fn from ".";

describe("Promise.race", () => {
  it("should resolve with the fastest promise", async () => {
    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve("one");
      }, 200);
    });
    const promise2 = new Promise((resolve) => {
      setTimeout(() => {
        resolve("two");
      }, 100);
    });

    const result = await fn([promise1, promise2]);

    expect(result).toBe("two");
  });

  it("should reject with the fastest rejected promise", async () => {
    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve("one");
      }, 200);
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Failed"));
      }, 100);
    });

    await expect(fn([promise1, promise2])).rejects.toThrow("Failed");
  });
});
