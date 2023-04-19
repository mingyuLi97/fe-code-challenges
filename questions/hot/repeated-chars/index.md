# repeated-chars

## 描述

> 输出字符串中不重复的叠词的数量，叠词指的是字符串中重复的字母
> 'abcdaaabbccccdddefgaaa' => 4 解释 ['aaa', 'bb', 'cccc', 'ddd']

## 题解

`new Set` 没什么好说的，为了数组去重，核心在于这个正则表达式。

> 在正则表达式中，`\1` 表示反向引用第一个捕获组（capturing group）。具体来说，它表示与第一个捕获组（用圆括号括起来的部分）匹配的内容。

`(\w)` 表示匹配任何单词字符， 因此 `/(\w)\1+/` 表示匹配重复的字符。

```javascript
function matchRepeatedChars(str) {
  return new Set(str.match(/(\w)\1+/g)).size;
}
```
