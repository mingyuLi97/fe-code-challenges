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
const el = document.createElement("div");
el.innerHTML =
  '<div id="app"><span><a>text</a></span><span><a></a><a></a></span></div>';

describe("vdom-render", () => {
  it("true dom", () => {
    expect(fn(vnode)).not.toBeNull();
    expect(fn(vnode)).toEqual(el.childNodes[0]);
  });
});
