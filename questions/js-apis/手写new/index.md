# 手写 new

> 实现 js 中的 new 关键字

## 题解

1. 创建一个空对象，继承构造函数的原型
2. 将 this 指向创建的对象
3. 构造函数有返回值时，如果是对象类型则返回该对象，如果原始类型则返回第一步创建的空对象。

```javascript
function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);

  const res = fn.apply(obj, args);

  return res instanceof Object ? res : obj;
}
```
