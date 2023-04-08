import { describe, it, expect } from "vitest";
import { Parent, Child } from ".";

describe("组合寄生继承", () => {
  it("inherit", () => {
    const p = new Parent("parent");
    const c = new Child("child", 18);

    expect(c instanceof Parent).toBeTruthy();
    expect(c instanceof Child).toBeTruthy();

    expect(c.getName()).toBe("child");
    expect(p.getName()).toBe("parent");
    expect(c.getAge()).toBe(18);

    expect(c.getName).toBe(p.getName);
  });

  it("constructor", () => {
    const c = new Child("child", 18);
    expect(c.constructor).toBe(Child);
  });
});
