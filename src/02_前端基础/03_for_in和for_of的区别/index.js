// for...in 用于可枚举数据 -- 对象、数组、字符串
const data1 = {
  name: 'foo',
  age: 20
}
const data2 = [1, 2, 3, 4, 5, 6]
const data3 = 'plasticine'

for (const key in data1) {
  console.log(key) // name age
}

for (const key in data2) {
  console.log(key) // 0 1 2 3 4 5
}

for (const key in data3) {
  console.log(key) // 0 1 2 3 4 5 6 7 8 9
}

// for...of 用于 可迭代 数据 -- 数组、字符串、Map、Set
const data4 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
])
const data5 = new Set([1, 2, 3, 4, 5])

for (const value of data2) {
  // 遍历数组
  console.log(value) // 1 2 3 4 5 6
}

for (const value of data3) {
  // 遍历字符串
  console.log(value) // p l a s t i c i n e
}

for (const value of data4) {
  // 遍历 Map
  console.log(value)
}

/**
  [ 'key1', 'value1' ]
  [ 'key2', 'value2' ]
  [ 'key3', 'value3' ]
 */

for (const value of data5) {
  // 遍历 Set
  console.log(value) // 1 2 3 4 5
}
