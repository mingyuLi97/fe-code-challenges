import { describe, it, expect } from "vitest";
import get from ".";

describe("lodash-get", () => {
  it("lodash.get", () => {
    const _ = { get };

    const obj = {
      a: {
        b: {
          c: "hello world",
        },
        d: undefined,
      },
    };

    // 测试获取嵌套属性
    expect(_.get(obj, "a.b.c")).toEqual("hello world");
    expect(_.get(obj, ["a", "b", "c"])).toEqual("hello world");

    // 测试获取不存在的属性
    expect(_.get(obj, "a.b.e")).toBeUndefined();

    // 测试获取 undefined 属性
    expect(_.get(obj, "a.d")).toBeUndefined();

    // 测试获取 null 或空字符串属性
    expect(_.get(obj, "a.b.c.d", "")).toEqual("");

    // 测试使用自定义的默认值获取 undefined 属性
    expect(_.get(obj, "a.d", "default value")).toEqual("default value");

    // 测试使用自定义的默认值获取不存在的属性
    expect(_.get(obj, "a.b.e", "default value")).toEqual("default value");

    // 测试获取数组元素
    const arr = [1, { a: 2 }, [3, 4]];
    expect(_.get(arr, "[1].a")).toEqual(2);
    expect(_.get(arr, ["1", "a"])).toEqual(2);

    // 测试使用自定义的默认值获取不存在的数组元素
    expect(_.get(arr, "[3].a", "default value")).toEqual("default value");
  });
});
