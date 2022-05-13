/**
 * @description ES5 实现
 * @param {Array} arr 数组
 */
function flatternES5(arr) {
  var res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatternES5(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

/**
 * @description ES6 实现
 * @param {Array} arr 数组
 */
function flatternES6(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }

  return arr;
}

const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

console.log(flatternES5(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flatternES6(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
