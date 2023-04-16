/**
 * compose
 * @description compose 函数
 */

/**
 * compose
 * @param {Array<Function>} fns
 * @return {Function}
 */
export function compose(...fns) {
  // do something
  // if (fns.length === 0) return (...args) => args;
  // return fns.reduce(
  //   (a, b) =>
  //     (...args) =>
  //       a(b(...args))
  // );
  return function (...args) {
    let res = args;
    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i];
      res = fn.apply(this, Array.isArray(res) ? res : [res]);
    }
    return res;
  };
}
/**
 * asyncCompose
 * @param {Array<Promise<Function>>} fns
 * @return {Promise<Function>}
 */
export function asyncCompose(...fns) {
  if (fns.length === 0) return (...args) => Promise.resolve(...args);
  return fns.reduce(
    (a, b) =>
      async (...args) =>
        a(await b(...args))
  );
}
