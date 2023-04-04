# 1.出现两次的字符

## 描述

> 给定一个字符串，找到第一次出现且仅出现两次的字符串，并返回索引，未找到返回 -1
>
> 'abbc' => 1
>
> 'abbbcdde' => 5
>
> 'abc' => -1
>
> ' ' => -1

## 解析

```javascript
/**
 * @param {string} str
 * @return {number}
 */
export function findFirstTwice(str) {
  const map = {};
  for (const char of str) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map[char] === 2) {
      return i;
    }
  }
  return -1;
}
```
