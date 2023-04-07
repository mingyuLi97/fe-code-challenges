import { describe, it, expect } from "vitest";
import fn from ".";

describe("Promise.allSettled", () => {
  it("should resolve with an array of settled promises", async () => {
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.reject(new Error("Failed"));
    const promise3 = Promise.resolve(3);

    const results = await fn([promise1, promise2, promise3, 4, new Error("5")]);

    expect(results).toEqual([
      { status: "fulfilled", value: 1 },
      { status: "rejected", reason: new Error("Failed") },
      { status: "fulfilled", value: 3 },
      { status: "fulfilled", value: 4 },
      { status: "fulfilled", value: new Error("5") },
    ]);
  });
});
