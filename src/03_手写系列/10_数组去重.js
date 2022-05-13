/**
 * @description 通过数组的 filter 方法
 * @param {Array} arr 数组
 */
function unique1(arr) {
  return arr.filter((value, index, array) => array.indexOf(value) === index);
}

/**
 * @description 转换成 Set 再转回数组
 * @param {Array} arr 数组
 */
function unique2(arr) {
  // 以下两种方式皆可以将 Set 转为 Array -- 前提是要在 ES6 以上
  // return Array.from(new Set(arr));
  return [...new Set(arr)];
}

// 测试
const arr = [1, 1, 2, 3, 5, 8, 13, 1, 1, 2, 3, 5, 8, 13];

console.log(unique1(arr)); // [ 1, 2, 3, 5, 8, 13 ]
console.log(unique2(arr)); // [ 1, 2, 3, 5, 8, 13 ]
