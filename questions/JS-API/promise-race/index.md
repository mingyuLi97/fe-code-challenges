# promise-race

## 描述

> 实现 Promise.race

## 题解

```javascript
function promiseRace(pArr) {
  // do something
  return new Promise((resolve, reject) => {
    for (let p of pArr) {
      p.then(resolve).catch(reject);
    }
  });
}
```
