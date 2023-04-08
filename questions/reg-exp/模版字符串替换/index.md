# 模版字符串替换

## 描述

> 模版字符串替换

```javascript
const data = {
  name: "小明",
  age: 16,
  school: "第三中学",
  classroom: "教室2",
};

console.log(
  "{{ name }} 今年 {{ age }} 岁，就读于 {{ school }} 今天在 {{ classroom }} 上课，{{ name }} {{ #data.age >= 18 ? '成年了' : '未成年' }}".render(
    data
  )
);
// 小明 今年 16 岁，就读于 第三中学 今天在 教室2 上课，小明 未成年
```

## 题解

```javascript
export default function main(data) {
  return this.replace(/{{(.*?)}}/g, (_, m) => {
    const k = m.trim();
    if (k.startsWith("#")) {
      return eval(k.substring(1));
    } else {
      return data[k] || "";
    }
  });
}
```
