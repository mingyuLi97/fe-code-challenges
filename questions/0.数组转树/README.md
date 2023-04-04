# 0.数组转树

## 描述

将如下数据结构（arr），转换为 Tree 结构。

```javascript
// arr
const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];

// tree
const res = {
  id: 2,
  name: "部门B",
  parentId: 0,
  children: [
    {
      id: 1,
      name: "部门A",
      parentId: 2,
      children: [
        {
          id: 3,
          name: "部门C",
          parentId: 1,
          children: [
            {
              id: 6,
              name: "部门F",
              parentId: 3,
            },
          ],
        },
        {
          id: 4,
          name: "部门D",
          parentId: 1,
          children: [
            {
              id: 8,
              name: "部门H",
              parentId: 4,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "部门E",
      parentId: 2,
    },
    {
      id: 7,
      name: "部门G",
      parentId: 2,
    },
  ],
};
```

## 题解

```javascript
function arrToTree(arr) {
  const root = arr.find((item) => item.parentId === 0);

  function buildTree(node) {
    const children = [];
    arr.forEach((item) => {
      if (item.parentId === node.id) {
        buildTree(item);
        children.push(item);
      }
    });
    if (children.length) {
      node.children = children;
    }
  }
  buildTree(root);
  return root;
}
```
