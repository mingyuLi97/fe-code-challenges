import { describe, it, expect } from "vitest";
import sendRequest, { request } from ".";

function pFn(str, limit = 1) {
  return new Promise((resolve, reject) => {
    sendRequest(str.split(""), limit, resolve);
  });
}

describe("promise-limit", () => {
  it("truly", async () => {
    await expect(pFn("abcdefg", 1)).resolves.toEqual("abcdefg".split(""));
  });

  it("truly", async () => {
    await expect(pFn("abcdefg", 3)).resolves.toEqual("abcdefg".split(""));
  });

  it("truly", async () => {
    await expect(pFn("abcdefg", 4)).resolves.toEqual("abcdefg".split(""));
  });
});
