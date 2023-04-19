/**
 * extends-string
 * @description 输入50a6we8y20x 输出50个a，6个we，8个y，20个x
 */

/**
 * @param {string} str
 * @return {string}
 */
export default function extendsStr(str) {
  // do something
  return str.replace(/(\d+)([a-z]+)/g, (_, num, s) => s.repeat(num))
}
