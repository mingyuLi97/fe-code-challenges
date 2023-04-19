# negative-index

## 描述

假设有数组 `const arr = [1, 2, 3]`

1. 允许负数索引，arr[-1] >> 3 arr[-3] >> 1
2. 超出返回 `undefined`，arr[-5] >> undefined

## 题解

通过 Proxy 拦截 get 方法，修正索引

```javascript
function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, idx, receiver) {
      idx = +idx;
      if (idx < 0) {
        idx = target.length + idx;
        if (idx < 0) return undefined;
      }
      return Reflect.get(target, idx, receiver);
    },
  });
}
```
