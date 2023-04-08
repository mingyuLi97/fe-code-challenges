# publish-subscribe

## 描述

> 发布订阅模式, 提供 on、once、off、emit 方法

## 题解

```javascript
class EventEmitter {
  constructor() {
    this.map = {};
  }

  on(name, cb) {
    if (!this.map[name]) {
      this.map[name] = [];
    }
    this.map[name].push(cb);
  }
  emit(name, ...args) {
    if (Array.isArray(this.map[name])) {
      this.map[name].forEach((cb) => cb(...args));
    }
  }
  off(name, cb) {
    if (Array.isArray(this.map[name])) {
      const idx = this.map[name].findIndex((c) => c === cb);
      if (idx !== -1) {
        this.map[name].splice(idx, 1);
      }
    }
  }
  once(name, cb) {
    const off = this.off.bind(this);
    this.on(name, function fn(...args) {
      cb(...args);
      off(name, fn);
    });
  }
}
```
