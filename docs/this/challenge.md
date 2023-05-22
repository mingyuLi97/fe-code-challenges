# this-challenge

## 1. 全局调用

```js
var a = 10;
function foo() {
  console.log("this1", this);
  console.log(window.a);
  console.log(this.a);
}
console.log("this2", this);
foo();
```

:::details 查看答案/解析

**答案：**

```js
// this2 Window
// this1 Window
// 10
// 10
```

**解析：**

1. 全局的 this 指向 window
2. 非严格模式下，全局调用的函数 this 指向 window
3. `var a = 10` 会在 window 上挂载 a, 相当于 `window.a = 10`, 因此 window.a => 10
4. this 指向 window

:::

## 2. 严格模式

```js
"use strict";
var a = 10;
function foo() {
  console.log("this1", this);
  console.log(window.a);
  console.log(this.a);
}
console.log("this2", this);
foo();
```

:::details 查看答案/解析

**答案：**

```js
// 'this2' Window
// 'this1' undefined
// 10
// Uncaught TypeError: Cannot read property 'a' of undefined
```

**解析：**

1. 严格模式下，全局的 this 不受影响，仍然指向 window
2. 严格模式下，全局调用的函数 this 指向 undefined
3. 严格模式下，`var a = 10` 仍然会在 window 上挂载, 因此依然输出 10
4. 上面说到函数内的 this 是 undefined，因此访问 this.a 会报错

:::

## 3. const、let、var

```js
let a = 10;
const b = 20;

function foo() {
  console.log(this.a);
  console.log(this.b);
}
foo();
console.log(window.a);
```

:::details 查看答案/解析

**答案：**

```js
// undefined;
// undefined;
// undefined;
```

**解析：**

let 和 const 是不会向 window 上挂载的，因此都是 undefined

:::

## 4. 同名变量

```js
var a = 1;
function foo() {
  var a = 2;
  console.log(this);
  console.log(this.a);
}

foo();
```

:::details 查看答案/解析

**答案：**

```js
// Window
// 1
```

**解析：**

全局调用的函数中 this 指向 Window，因此 `this.a` => 1

:::

## 5. 函数嵌套

```javascript
var a = 1;
function foo() {
  var a = 2;
  function inner() {
    console.log(this.a);
  }
  inner();
}

foo();
```

:::details 查看答案/解析

**答案：**

```js
// 1
```

**解析：**

这里具有迷惑性，因为 this.a 是在 foo 函数内，可能潜意识中 this 指向的是 foo 这个作用域。
事实上，调用的函数（inner）仍然是以全局的方式调用，因此 this 仍指向 Window

:::

## 6. 函数被改变

```javascript
function foo() {
  console.log(this.a);
}
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo };

obj.foo();
foo2();
obj2.foo2();
```

:::details 查看答案/解析

**答案：**

```js
// 1
// 2
// 3
```

**解析：**

1. `obj.foo()` 中的 this 指向调用者 obj
2. `foo2()` 发生了隐式丢失，调用者是 window，使得`foo()`中的 this 指向 window
3. `foo3()` 发生了隐式丢失，调用者是 obj2，使得 `foo()` 中的 this 指向 obj2

:::

## 7. 函数当参数

```javascript
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
doFoo(obj.foo);
```

:::details 查看答案/解析

**答案：**

```js
// Window
// 2
```

**解析：**

1. 全局调用，所以指向 Window
2. 虽然传递的是 `obj.foo()`, 但是调用的时候是 `fn()`，依然是全局调用的，因此 this 指向 Window

:::

## 8. 函数当参数 2

```javascript
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
var obj2 = { a: 3, doFoo };

obj2.doFoo(obj.foo);
```

:::details 查看答案/解析

**答案：**

```js
// { a:3, doFoo: f }
// 2
```

**解析：**

1. 由于是通过 obj2 调用的 `doFoo()`，因此 this 指向的是 obj2
2. 调用 `fn()` 时，仍然是全局调用的，因此 this 指向 Window

:::

## 9. setTimeout 中的 this

```javascript
var obj1 = { a: 1 };
var obj = {
  a: 2,
  foo: function () {
    setTimeout(function () {
      console.log(this.a);
    }, 0);
  },
};
var a = 3;

obj.foo();
obj.foo.call(obj1);
```

:::details 查看答案/解析

**答案：**

```js
// 3
```

**解析：**

1. 这里的关键点：setTimeout 中的函数指向是 Window。
2. 虽然使用了 call，但是这里的 call 改变的是 foo 方法的 this，对 setTimeout 中的函数其实是没有影响的

:::

## 10. call

```javascript
var obj = {
  a: "obj",
  foo: function () {
    console.log("foo:", this.a);
    return function () {
      console.log("inner:", this.a);
    };
  },
};
var a = "window";
var obj2 = { a: "obj2" };

obj.foo()();
obj.foo.call(obj2)();
obj.foo().call(obj2);
```

:::details 查看答案/解析

**答案：**

```js
// foo: obj
// inner: window

// foo: obj2
// inner: window

// foo: obj
// inner: obj2
```

**解析：**

1. obj 调用 foo，因此 this 指向 obj 输出
2. 将 1 的返回值继续调用，此时是全局调用，所以 this 指向 Window
3. `obj.foo.call(obj2)` 是将 foo 这个函数显示的绑定到了 obj2，因此指向 obj2
4. 将 3 的返回值继续调用，此时是全局调用，所以 this 指向 Window
5. obj 调用 foo，因此 this 指向 obj 输出
6. 将 4 的返回值通过 call 显示绑定 this，因此 this 指向 obj2

:::

## 11. 多次 bind

```javascript
var obj = {
  a: 0,
  foo: function () {
    console.log(this.a);
  },
};
var obj1 = { a: 1 };
var obj2 = { a: 2 };
var a = 3;

obj.foo.bind(obj1).bind(obj2)();
```

:::details 查看答案/解析

**答案：**

```js
// 1
```

**解析：**

bind 操作只有第一次绑定有效果，之后再次进行绑定，不会有效果。因此 this 永远指向第一次绑定的对象 obj1

:::

## 12. new

```javascript
function A(val) {
  this.a = val;
  this.foo = function () {
    console.log(this.a);
    return function () {
      console.log(this.a);
    };
  };
}

var a = 2;

var instance = new A(1);
instance.foo()();
```

:::details 查看答案/解析

**答案：**

```js
// 1
// 2
```

**解析：**

1. new 的时候会把 this 绑定到创建出的实例上，因此调用 instance.foo() 时 this 指向 instance 对象
2. 继续调用 1 的返回值时，相当于全局调用，因此 this 指向 Window

:::

## 13. 箭头函数

```javascript
var obj = {
  name: "obj",
  foo1: () => {
    console.log(this.name);
  },
  foo2: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
  foo3: () => {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
};
var name = "window";
obj.foo1();
obj.foo2()();
obj.foo3()();
```

:::details 查看答案/解析

**答案：**

```js
// window
// obj
// obj
// window
// window
```

**解析：**
箭头函数的 this 是在定义时就确定好的，并且是由外层的作用域来决定

1. foo1 是箭头函数，因此无论是谁调用它，它的 this 都指向外层作用域，这里的外层就是 window
2. `obj.foo2()` 是普通函数因此 this 指向调用它的对象，也就是 obj
3. 2 的返回值是箭头函数，所以该函数的 this 指向外层，也就是 foo2，因此 this 是 obj
4. 同 1
5. 4 的返回值是箭头函数，所以该函数的 this 指向外层，也就是 foo1 的 this，因此是 window

:::

## 14. 箭头函数 + call

```javascript
var name = "window";
var obj1 = {
  name: "obj1",
  foo1: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
  foo2: () => {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};
var obj2 = {
  name: "obj2",
};
obj1.foo1.call(obj2)();
obj1.foo1().call(obj2);
obj1.foo2.call(obj2)();
obj1.foo2().call(obj2);
```

:::details 查看答案/解析

**答案：**

```js
// obj2
// obj2

// obj1
// obj1

// window
// window

// window
// obj2
```

**解析：**

- `obj1.foo1.call(obj2)` this 被 call 修改为 obj2
- 1 的返回值是箭头函数，调用时指向外层作用域，因此也是 obj2
- `obj1.foo1()` 因为是 obj1 调用的 所以 this 指向 obj1
- 3 的返回值是箭头函数，但是箭头函数不能被改变指向，因此 call 无效，所以仍然指向外层，即 obj1
- `obj1.foo2.call(obj2)`，因为 foo2 是箭头函数，无法被改变指向，所以仍然指向外层，即 window
- 5 的返回值是普通函数，相当于全局调用，所以 this 指向 window
- `obj1.foo2()` 箭头函数指向外层，即 window
- 7 的返回值是普通函数，被执行了 `.call(obj2)`，因此指向 obj2

:::

## 15. new + 箭头函数 + call

```javascript
var name = "window";
function Person(name) {
  this.name = name;
  this.obj = {
    name: "obj",
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    },
  };
}
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.obj.foo1()();
person1.obj.foo1.call(person2)();
person1.obj.foo1().call(person2);

person1.obj.foo2()();
person1.obj.foo2.call(person2)();
person1.obj.foo2().call(person2);
```

:::details 查看答案/解析

**答案：**

```js
// window
// window
// person2

// obj
```

**解析：**

1. `person1.obj.foo1()` 返回一个普通函数，在执行调用时相当于全局调用，因此 指向 window
2. `person1.obj.foo1.call(person2)` 与 1 同理
3. `person1.obj.foo1()` 返回一个普通函数，调用时被 call 改变了 this，因此指向 person2
4. `person1.obj.foo2()` 这里是 person1 中的 obj 调用了 foo2，因此 foo2 中的 this 指向 obj，其返回值是箭头函数，因此 this 也是指向 obj
5. `person1.obj.foo2.call(person2)` foo2 的 this 被 call 修改 指向 person2，因此返回的箭头函数也是指向 person2
6. `person1.obj.foo2()` 与 4 一样，函数的 this 是 obj，因为返回值是箭头函数，call 无法改变，因此指向还是 obj

:::
