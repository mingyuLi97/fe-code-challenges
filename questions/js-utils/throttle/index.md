# throttle

## 描述

> 节流，保证最后一次调用一定执行

## 题解

```javascript
function throttle(fn, delay = 200) {
  // do something
  let prev = 0;
  let timer = null;
  return function (...args) {
    const cur = +new Date();
    timer && clearTimeout(timer);
    if (cur >= prev + delay) {
      fn.apply(this, args);
      prev = cur;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        prev = cur;
      }, delay);
    }
  };
}
```
