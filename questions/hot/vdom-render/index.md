# vdom-render

## 描述

> 将虚拟 DOM 转换成真实 DOM

```
{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
```

## 题解

```javascript
function main(vnode) {
  function render(node) {
    if (!node) return;
    if (typeof node === "string") {
      return document.createTextNode(node);
      return "";
    }
    const { tag, attrs = {}, children = [] } = node;
    const el = document.createElement(tag);
    for (const k in attrs) {
      el.setAttribute(k, attrs[k]);
    }
    if (children.length) {
      children.forEach((child) => {
        el.appendChild(render(child));
      });
    }
    return el;
  }
  return render(vnode);
}
```
