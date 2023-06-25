/**
 * sql-select
 * @description 模拟 sql 查询
 * query 传入参数为原始数据（数组格式，每个元素都是对象）通过进行链式调用对数据执行操作，支持的方法有:
 *  - where(predicate): 根据参数的条件进行筛选，参数与 [].filter 的参数类似
 *  - orderBy(key, desc): 根据 key 的值进行排列，默认升序排列，当第二个参数为 true 时降序排列
 *  - groupBy(key): 根据 key 的值对数据元素进行分组，合并为二维数组
 *  - execute(): 执行所有处理并返回最终结果
 * @example
 * let res = query(data)
    .where((item) => item.age > 18)
    .orderBy("age")
    .groupBy("city")
    .execute();
 */

// const data = [
//   { name: "foo", age: 16, city: "shanghai" },
//   { name: "bar", age: 24, city: "hangzhou" },
//   { name: "fiz", age: 22, city: "shanghai" },
//   { name: "baz", age: 19, city: "hangzhou" },
// ];

/**
 * @param {Array<any>} arr
 * @return {*}
 */
export default function query(arr) {
  // do something
}
