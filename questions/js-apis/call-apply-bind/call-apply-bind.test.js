import { describe, it, expect } from "vitest";
import { call, apply, bind } from ".";

describe("call-apply-bind", () => {
  Function.prototype._call = call;
  Function.prototype._apply = apply;
  Function.prototype._bind = bind;
  it("test call", () => {
    const obj = { name: "limy" };
    function run(age) {
      return this.name + " " + age;
    }
    expect(run._call(obj, 18)).toBe("limy 18");
  });

  it("test apply", () => {
    const obj = { name: "limy" };
    function run(age) {
      return this.name + " " + age;
    }
    expect(run._apply(obj, [18])).toBe("limy 18");
  });

  it("test bind", () => {
    const obj = { name: "limy" };
    function run(age) {
      return this.name + " " + age;
    }
    expect(run._bind(obj)(18)).toBe("limy 18");
  });

  it("如果传入的是 string、number、boolean，得到的应该是 Number、String...", () => {
    String.prototype.name = "string_name";
    function run() {
      return this.name;
    }
    expect(run._call("")).toBe("string_name");
    expect(run._apply("")).toBe("string_name");
    expect(run._bind("")()).toBe("string_name");
  });
});
