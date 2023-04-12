/**
 * parse-url-query
 * @description 将 url 参数转换成对象
 */

/**
 * @param {string} url
 * @return {Record<string, string>}
 */
export default function parse(url) {
  // do something
  const obj = {};
  url.replace(/[&?]([^=&]+)=?([^&]*)/g, (m, k, v) => {
    obj[decodeURIComponent(k)] = decodeURIComponent(v);
  });
  return obj;
}
