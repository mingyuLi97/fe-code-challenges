/**
 * repeated-chars
 * @description 输出字符串中不重复叠词的数量
 * 'abcdaaabbccccdddefgaaa' => 4 解释 ['aaa', 'bb', 'cccc', 'ddd']
 */

/**
 * @param {string} str
 * @return {number}
 */
export default function matchRepeatedChars(str) {
  // do something
  return new Set(str.match(/(\w)\1+/g)).size;
}
