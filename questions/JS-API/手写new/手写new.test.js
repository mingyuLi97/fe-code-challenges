import { describe, expect, it } from "vitest";
import myNew from "./index";

describe("my new", () => {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  it("正确地创建一个新对象", () => {
    const person = new Person("John", 30);
    const newPerson = myNew(Person, "John", 30);

    expect(newPerson).toBeInstanceOf(Person);
    expect(person).toEqual(newPerson);
  });

  it("测试构造函数的原型是否正确", () => {
    Person.prototype.gender = "male";
    const newPerson = myNew(Person, "John", 30);
    expect(newPerson.gender).toBe("male");
  });

  it("测试构造函数返回值是否正确", () => {
    function Animal(name) {
      this.name = name;
      return "not an object";
    }

    const newAnimal = myNew(Animal, "dog");

    expect(newAnimal).toBeInstanceOf(Animal);
  });
});
