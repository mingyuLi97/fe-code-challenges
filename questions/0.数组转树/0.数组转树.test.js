import { describe, expect, it } from "vitest";
import { arrToTree } from ".";

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

describe("build tree", () => {
  it("build tree", () => {
    expect(arrToTree(arr)).toStrictEqual(res);
  });
});

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
