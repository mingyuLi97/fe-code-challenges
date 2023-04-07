# promise-allSettled

## 描述

> Promise.allSettled 实现

## 题解

```javascript
function main(pArr) {
  // do something
  const res = [];
  const n = pArr.length;
  let count = 0;

  return new Promise((resolve) => {
    const set = (i, status, value) => {
      const obj = { status };
      if (status === "fulfilled") {
        obj["value"] = value;
      } else {
        obj["reason"] = value;
      }
      res[i] = obj;
      if (++count === n) resolve(res);
    };

    pArr.forEach((p, i) => {
      if (p instanceof Promise) {
        p.then((r) => set(i, "fulfilled", r)).catch((e) =>
          set(i, "rejected", e)
        );
      } else {
        set(i, "fulfilled", p);
      }
    });
  });
}
```
