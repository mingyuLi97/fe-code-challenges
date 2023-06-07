# arrangement

## 描述

> 排列组合
> fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

## 题解

```javascript
export default function fn(arr) {
  // do something
  const res = [];
  const path = [];

  function backtracking(startIdx = 0) {
    if (path.length === arr.length) {
      res.push(path.join(""));
      return;
    }

    for (let i = startIdx; i < arr.length; i++) {
      const innerArr = arr[i];
      for (let j = 0; j < innerArr.length; j++) {
        path.push(innerArr[j]);
        backtracking(i + 1);
        path.pop();
      }
    }
  }
  backtracking();
  return res;
}
```
