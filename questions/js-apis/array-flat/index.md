# array-flat

## 描述

> 数组的 flat

## 题解

```javascript
function flat(depth = 1) {
  // do something
  const arr = this;
  const res = [];
  function flat(data) {
    if (Array.isArray(data) && depth-- >= 0) {
      data.forEach(flat);
    } else {
      res.push(data);
    }
  }
  flat(arr);
  return res;
}
```
