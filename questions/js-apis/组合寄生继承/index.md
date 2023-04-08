# 组合寄生继承

## 描述

> 组合寄生继承

- 继承属性、方法
- 父级的原型链不受子级的影响（子改动不会影响父）
- 子的 constructor 指向 Child
- Child 支持 getAge 方法

## 题解

```javascript
export function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  return this.name;
};

export function Child(name, age) {
  // ...
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.getAge = function () {
  return this.age;
};
```
