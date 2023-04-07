# Promise.all

```javascript
function promiseAll(pArr) {
  const n = pArr.length;
  const res = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    const _then = (idx, v) => {
      res[idx] = v;
      if (++count === n) {
        resolve(res);
      }
    };
    for (let i = 0; i < n; i++) {
      const p = pArr[i];
      if (p instanceof Promise) {
        p.then((r) => _then(i, r)).catch((err) => reject(err));
      } else {
        _then(i, p);
      }
    }
  });
}
```
