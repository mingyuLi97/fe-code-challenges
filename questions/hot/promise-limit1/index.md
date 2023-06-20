# promise-limit

## 描述

请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发数，当所有请求结束之后，需要执行 callback 回调

```js
function sendRequest (urls, max, callback)
```

## 题解

```javascript
/**
 * @param {string[]} urls
 * @param {number} limit
 * @param {Function} callback
 */
export default function sendRequest(urls, limit, callback) {
  const res = [];
  let cur = limit;
  let completeCount = 0;

  for (let i = 0; i < limit; i++) {
    _resolve(i);
  }

  function _resolve(i) {
    request(urls[i])
      .then((r) => {
        res[i] = r;
      })
      .finally(() => {
        completeCount++;
        if (cur < urls.length) {
          _resolve(cur++);
          return;
        }
        if (completeCount === urls.length) callback(res);
      });
  }
}
```
