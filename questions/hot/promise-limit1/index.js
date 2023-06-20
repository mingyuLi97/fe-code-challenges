/**
 * promise-limit
 * @description
 * 请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发数，当所有请求结束之后，需要执行 callback 回调
 */

export function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url), 500);
  });
}

/**
 * @param {string[]} urls
 * @param {number} limit
 * @param {Function} callback
 */
export default function sendRequest(urls, limit, callback) {
  // do something
}
