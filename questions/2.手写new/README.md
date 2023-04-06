# 手写 new

> 实现 js 中的 new 关键字

## 题解

```javascript
function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);

  const res = fn.apply(obj, args);

  return res instanceof Object ? res : obj;
}
```
