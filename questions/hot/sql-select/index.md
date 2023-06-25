# sql-select

## 描述

模拟 sql 查询

- query 传入参数为原始数据（数组格式，每个元素都是对象）通过进行链式调用对数据执行操作，支持的方法有:
  - where(predicate): 根据参数的条件进行筛选，参数与 [].filter 的参数类似
  - orderBy(key, desc): 根据 key 的值进行排列，默认升序排列，当第二个参数为 true 时降序排列
  - groupBy(key): 根据 key 的值对数据元素进行分组，合并为二维数组
  - execute(): 执行所有处理并返回最终结果

例子：

````js
let res = query(data)
  .where((item) => item.age > 18)
  .orderBy("age")
  .groupBy("city")
  .execute();```
````

## 题解

```javascript
class QueryBuilder {
  constructor(arr) {
    this.arr = arr;
    this.res = arr;
  }

  where(condition) {
    this.res = this.res.filter(condition);
    return this;
  }

  orderBy(key, des = false) {
    this.res.sort((a, b) => {
      return (a[key] - b[key]) * (des ? -1 : 1);
    });
    return this;
  }

  groupBy(key) {
    const map = {};
    this.res.forEach((item) => {
      const k = item[key];
      if (!map[k]) {
        map[k] = [];
      }
      map[k].push(item);
    });
    this.res = Object.values(map);

    return this;
  }

  execute() {
    console.log(this.res);
    return this.res;
  }
}

export default function query(arr) {
  // do something
  return new QueryBuilder(arr);
}
```
