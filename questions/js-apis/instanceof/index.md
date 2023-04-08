# instanceof

## 描述

> 手写 instanceof

## 题解

```javascript
// 迭代查询
function _instanceof(a, b) {
  // do something
  let proto = a.__proto__;
  const prototype = b.prototype;
  while (proto) {
    if (proto === prototype) return true;
    proto = proto.__proto__;
  }

  return false;
}

// 递归查询
function _instanceof(a, b) {
  const p = Object.getPrototypeOf(a);
  return p === null ? false : p === b.prototype || _instanceof(p, b);
}
```

:::warning
`Object.prototype.__proto__` 不推荐使用了，应该使用 `Object.getPrototypeOf` 替代
:::
