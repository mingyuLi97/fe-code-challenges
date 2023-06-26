# es5-map

## 描述

> es5 实现 Map

## 题解

```javascript
function ES5Map() {
  // do something
  this.keys = [];
  this.values = [];
}

ES5Map.prototype.set = function (key, value) {
  const idx = this.keys.indexOf(key);
  if (idx === -1) {
    this.keys.push(key);
    this.values.push(value);
  } else {
    this.values[idx] = value;
  }
};

ES5Map.prototype.get = function (key) {
  return this.values[this.keys.indexOf(key)];
};

ES5Map.prototype.has = function (key) {
  return this.keys.includes(key);
};

ES5Map.prototype.delete = function (key) {
  const idx = this.keys.indexOf(key);
  if (idx === -1) return false;
  this.keys.splice(idx, 1);
  this.values.splice(idx, 1);
  return true;
};
```
