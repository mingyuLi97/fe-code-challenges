import { describe, it, expect } from "vitest";
import fn from ".";

describe("模版字符串替换", () => {
  it("true output", () => {
    String.prototype.render = fn;
    const str =
      "{{ name }} {{}} 今年 {{ age }} 岁，就读于 {{ school }} 今天在 {{ classroom }} 上课，{{ name }} {{ #data.age >= 18 ? '成年了' : '未成年' }}";
    const data = {
      name: "小明",
      age: 16,
      school: "第三中学",
      classroom: "教室2",
    };
    expect(str.render(data)).toBe(
      "小明  今年 16 岁，就读于 第三中学 今天在 教室2 上课，小明 未成年"
    );
  });
});
