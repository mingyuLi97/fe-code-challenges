# deepcopy

## 描述

> 深拷贝

## 题解

```javascript
function deepCopy(data, hash = new WeakMap()) {
  if (typeof data === "object" && data !== null) {
    if (hash.has(data)) return hash.get(data);
    if (data instanceof RegExp) return new RegExp(data);
    if (data instanceof Date) return new Date(data);
    const target = Array.isArray(data) ? [] : {};
    hash.set(data, target);
    // Reflect.ownKeys => 解决 Symbol 当 key
    for (const k of Reflect.ownKeys(data)) {
      target[k] = deepCopy(data[k], hash);
    }
    return target;
  } else {
    return data;
  }
}
```
