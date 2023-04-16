# compose

## 描述

1. 实现 compose 函数

```js
// compose(f,g)(x) === f(g(x))
// compose(f,g,m)(x) === f(g(m(x)))
// compose(f,g,m)(x) === f(g(m(x)))
// compose(f,g,m,n)(x) === f(g(m(n(x))))
```

2. 实现 syncCompose, 支持传递 promise function

## 题解

```javascript
// 迭代实现
function compose(...fns) {
  // do something
  return function (...args) {
    let res = args;
    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i];
      res = fn.apply(this, Array.isArray(res) ? res : [res]);
    }
    return res;
  };
}

function compose(...fns) {
  if (fns.length === 0) return (...args) => args;
  return fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

function asyncCompose(...fns) {
  if (fns.length === 0) return (...args) => Promise.resolve(...args);
  return fns.reduce(
    (a, b) =>
      async (...args) =>
        a(await b(...args))
  );
}
```
