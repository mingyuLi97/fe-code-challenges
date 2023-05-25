# prototype-challenge

## 1. 覆盖 prototype

```javascript
var tmp = { n: 1 };
function A() {}
A.prototype = tmp;
var b = new A();

A.prototype = {
  n: 2,
  m: 3,
};
var c = new A();
console.log(b.n);
console.log(b.m);

console.log(c.n);
console.log(c.m);

console.log(b instanceof A);
console.log(c instanceof A);
```

:::details 查看答案/解析

**答案：**

```js
// 1
// undefined
// 2
// 3
// false
// true
```

**解析：**
b 是由构造函数 A 创建出来的，因此 `b.__proto__` 指向 `A.prototype`即 tmp，题目修改了 `A.prototype` 的指向，
所以创建出来的 c，`c.__proto__` 指向新的 `A.prototype`（{n:2,m:3}），这里需要注意 `b.__proto__` 一直指向的都是 tmp, 题目修改的是 `A.prototype` 的指向，所以对其无影响

1. `b.__proto__` 是 `tmp`，因此 `b.n => 1` `b.m => undefined`
2. `c.__proto__` 是 `{n:2,m:3}`, `b.n => 2` `b.m => 3`
3. instanceof 是根据原型链上是否存在构造函数所决定的。b 的原型链 `b => tmp => Object.prototype`

:::

## 2. prototype

```javascript
function Fn() {}
const f = new Fn();

Object.prototype.a = 1;
Function.prototype.b = 2;

console.log(Fn.a);
console.log(Fn.b);
console.log(f.a);
console.log(f.b);
```

:::details 查看答案/解析

**答案：**

```js
// 1 2 1 undefined
```

**解析：**
Fn 的原型链：`Fn.__proto__` => `Function.prototype` => `Object.prototype`;
f 的原型链： `f.__proto__ ` => `Fn.prototype` => `Object.prototype`
:::
