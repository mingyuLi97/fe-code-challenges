import { describe, it, expect } from "vitest";
import deepCopy from ".";

describe("deepCopy", () => {
  it("should deeply clone an object", () => {
    const symbol = Symbol("foo");
    const obj = {
      a: 1,
      b: "string",
      c: undefined,
      d: null,
      e: true,
      f: Symbol("abc"),
      g: [
        1,
        2,
        {
          a: 1,
          b: [1, 2, 3],
        },
      ],
      h: {
        a: 1,
        b: {
          c: "hello",
        },
        d: new Date(),
        e: function v() {},
        f: /regexp/,
      },
      [symbol]: "bar",
    };

    const cloned = deepCopy(obj);

    // 原始对象和克隆对象相等
    expect(cloned).toStrictEqual(obj);
    expect(cloned).not.toBe(obj);

    cloned.h.b.c = "world";
    // 修改克隆对象不影响原始对象
    expect(obj.h.b.c).toEqual("hello");
  });

  it("should deeply clone an object with circular reference", () => {
    const original = {
      a: {
        b: {
          c: "hello world",
        },
      },
    };

    // 循环引用
    original.a.b.d = original.a;

    const cloned = deepCopy(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);

    // 修改克隆对象不影响原始对象
    cloned.a.b.c = "hi there";
    expect(original.a.b.c).toEqual("hello world");

    // 克隆对象的循环引用指向了克隆后的对象
    expect(cloned.a.b.d).toBe(cloned.a);
  });
});
