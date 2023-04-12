# parse-url-query

## 描述

> 将 url 参数转换成对象,
>
> 1. 要求对 k，v decode
> 2. 处理异常：https://example.com/?a=1&b=&c=1&d&e=1 => {a: '1', b: '', c: '1', d: '', e:'1'}

## 题解

```javascript
function parse(url) {
  const obj = {};
  url.replace(/[&?]([^=&]+)=?([^&]*)/g, (m, k, v) => {
    obj[decodeURIComponent(k)] = decodeURIComponent(v);
  });
  return obj;
}

function parse(url) {
  // do something
  const i = url.indexOf("?");
  if (i === -1) return {};
  const obj = {};
  const queryList = url.substring(i + 1).split("&");
  for (const query of queryList) {
    const [k, v] = query.split("=");
    if (k) {
      obj[decodeURIComponent(k)] = v ? decodeURIComponent(v) : "";
    }
  }
  return obj;
}
```
