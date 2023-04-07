# treeToList

## 描述

> 树形结构转换成列表

```js
const data = [
  {
    id: "1",
    name: "父节点1",
    children: [
      {
        id: "1-1",
        name: "子节点1-1",
        children: [
          {
            id: "1-1-1",
            name: "子节点1-1-1",
          },
          {
            id: "1-1-2",
            name: "子节点1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "父节点2",
    children: [
      {
        id: "2-1",
        name: "子节点2-1",
      },
    ],
  },
];

// To

const ar = [
  {
    id: "1",
    name: "父节点1",
  },
  {
    id: "1-1",
    name: "子节点1-1",
    parentId: "1",
  },
  {
    id: "1-1-1",
    name: "子节点1-1-1",
    parentId: "1-1",
  },
  {
    id: "1-1-2",
    name: "子节点1-1-2",
    parentId: "1-1",
  },
  {
    id: "2",
    name: "父节点2",
  },
  {
    id: "2-1",
    name: "子节点2-1",
    parentId: "2",
  },
];
```

## 题解

```javascript
function tree2list(treeList) {
  const list = [];
  function toList(data, parentId) {
    for (const item of data) {
      const { id, name, children = [] } = item;
      const obj = { id, name };
      if (parentId) {
        obj["parentId"] = parentId;
      }
      list.push(obj);
      toList(children, id);
    }
  }
  toList(treeList);
  return list;
}
```
