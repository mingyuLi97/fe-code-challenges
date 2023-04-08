# call-apply-bind

## 描述

> call apply bind

## 题解

```javascript
function call(obj, ...args) {
  if (obj === null || obj === undefined) {
    obj = globalThis;
  } else {
    obj = Object(obj);
  }
  const f = Symbol();
  obj[f] = this;
  const res = obj[f](...args);
  delete obj[f];
  return res;
}

function apply(obj, args = []) {
  if (obj === null || obj === undefined) {
    obj = globalThis;
  } else {
    obj = Object(obj);
  }
  const f = Symbol();
  obj[f] = this;
  const res = obj[f](...args);
  delete obj[f];
  return res;
}

function bind(obj) {
  if (obj === null || obj === undefined) {
    obj = globalThis;
  } else {
    obj = Object(obj);
  }
  const f = Symbol();
  obj[f] = this;
  return function (...args) {
    return obj[f](...args);
  };
}
```
