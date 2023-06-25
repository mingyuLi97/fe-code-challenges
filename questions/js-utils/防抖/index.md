# 防抖

## 描述

>  debounce

## 题解

```javascript
function debounce(fn, delay = 200, immediate = false) {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);

    if (immediate && !timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {}, 0);
      return;
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```
