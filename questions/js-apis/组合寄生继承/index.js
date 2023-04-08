/**
 * 组合寄生继承
 * @description 组合寄生继承
 * 1. 继承属性、方法
 * 2. 父级的原型链不受子级的影响（子改动不会影响父）
 * 3. 子的 constructor 指向 Child
 * 4. Child 支持 getAge 方法
 */

export function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  return this.name;
};

export function Child(name, age) {
  // ...
}
