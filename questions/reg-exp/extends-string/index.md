# extends-string

## 描述

[🔗 原题链接](https://github.com/Sunny-117/js-challenges/issues/122)

> 输入 50a6we8y20x 输出 50 个 a，6 个 we，8 个 y，20 个 x

## 题解

```javascript
function extendsStr(str) {
  return str.replace(/(\d+)([a-z]+)/g, (_, num, s) => s.repeat(num));
}
```
