import { describe, it, expect } from "vitest";
import fn from ".";

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

describe("treeToList", () => {
  it("toEqual", () => {
    expect(fn(data)).toEqual([
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
    ]);
  });
});
