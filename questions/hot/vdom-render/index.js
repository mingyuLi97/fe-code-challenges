/**
 * vdom-render
 * @description 将虚拟 DOM 转换成真实 DOM
 */

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

export default function main(vnode) {
  // do something
  function create(node) {
    const isTextNode = typeof node === "string";
    if (isTextNode) {
      return document.createTextNode(node);
    }
    const { tag, attrs = {}, children = [] } = node;
    const el = document.createElement(tag);
    for (let k in attrs) {
      el[k] = attrs[k];
    }
    children.forEach((child) => {
      el.appendChild(create(child));
    });
    return el;
  }

  return create(vnode);
}
