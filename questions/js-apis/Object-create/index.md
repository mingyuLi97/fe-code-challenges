# Object-create

## 描述

> 实现 Object.create

## 题解

```javascript
function main(obj) {
  function fn() {}
  fn.prototype = obj;
  return new fn();
}
```
