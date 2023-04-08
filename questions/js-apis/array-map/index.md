# Array.prototype.map

## 描述

> 手写 Array.prototype.map

## 题解

```javascript
function map(cb) {
  const arr = this;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = cb(arr[i], i, arr);
  }
  return res;
}
```
