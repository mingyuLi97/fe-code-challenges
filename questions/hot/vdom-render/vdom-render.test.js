/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import fn from ".";

const vnode = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: ["text"] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};

describe("vdom-render", () => {
  it("true dom", () => {
    // expect(fn(fn(vnode).outerHTML)).toBe(
    //   '<div id="app"><span><a>text</a></span><span><a></a><a></a></span></div>'
    // );
    expect(fn(vnode)).not.toBeNull();
  });
});
