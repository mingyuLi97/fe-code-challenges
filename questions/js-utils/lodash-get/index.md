# lodash-get

## 描述

> 实现 lodash.get

## 题解

```javascript
function get(obj, path, defaultVal) {
  // do something
  if (!Array.isArray(path)) {
    path = path
      // i===0 是为了解决 `[1].a`，如果第一个是 [], 会出现 ['', '1', 'a']
      .replace(/\[(.*?)\]/g, (_, v, i) => (i === 0 ? v : `.${v}`))
      .split(".");
  }
  let cur = obj;
  for (const k of path) {
    if (typeof cur[k] === "undefined") return defaultVal;
    cur = cur[k];
  }
  return cur;
}
```
