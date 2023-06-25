import { describe, it, expect } from "vitest";
import query from ".";

describe("sql-select", () => {
  const data = [
    { name: "foo", age: 16, city: "shanghai" },
    { name: "bar", age: 24, city: "hangzhou" },
    { name: "fiz", age: 22, city: "shanghai" },
    { name: "baz", age: 19, city: "hangzhou" },
  ];

  it("equal", () => {
    expect(
      query(data)
        .where((item) => item.age > 18)
        .orderBy("age", true)
        .groupBy("city")
        .execute()
    ).toEqual([
      [
        { name: "bar", age: 24, city: "hangzhou" },
        { name: "baz", age: 19, city: "hangzhou" },
      ],
      [{ name: "fiz", age: 22, city: "shanghai" }],
    ]);
  });
  it("equal", () => {
    expect(query(data).orderBy("age", true).groupBy("city").execute()).toEqual([
      [
        { name: "bar", age: 24, city: "hangzhou" },
        { name: "baz", age: 19, city: "hangzhou" },
      ],

      [
        { name: "fiz", age: 22, city: "shanghai" },
        { name: "foo", age: 16, city: "shanghai" },
      ],
    ]);
  });
});
