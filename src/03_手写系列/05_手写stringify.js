/**
 * @description stringify 的序列化规则
 *
 * 循环引用要抛出异常 TypeError: Converting circular structure to JSON
 * string -> string
 * 计算属性名 -> 属性名: 值
 * Symbol -> 忽略
 * number -> number
 * boolean -> true/false
 * null -> null
 * undefined -> 忽略
 * function -> 忽略
 * arrow function -> 忽略
 * array -> 有 undefined 时转成 null
 */

const foo = {
  name: 'foo',
  booleanVar: true,
  numberVar: 666,
  undefinedVar: undefined,
  nullVar: null,
  arr: [1, 'abc', true, false, null, undefined],
  ['computedPropertyKey']: 'computedPropertyValue',
  [Symbol('symbolKey')]: 'symbolKey',
  fn() {
    console.log('fn')
  },
  arrowFn: () => console.log('arrowFn')
}

const bar = {
  name: 'bar',
  booleanVar: true,
  numberVar: 666,
  undefinedVar: undefined,
  nullVar: null,
  fn() {
    console.log('fn')
  },
  arrowFn: () => console.log('arrowFn')
}

// 循环引用
// foo.bar = bar
// bar.foo = foo

// console.log(JSON.stringify(foo, null, 2))

/**
 * @description 用递归的思想，非 object 则直接返回结果，object 则递归序列化
 * @param {object | number | string | boolean} value
 */
function myStringify(value) {
  const type = typeof value

  if (type !== 'object') {
    // base case -- 非 object
    if (type === 'string') {
      // 字符串的序列化结果要加上双引号
      value = `"${value}"`
    }
    if (type === 'function' || type === 'undefined') return

    return String(value)
  } else {
    // object -- 递归序列化
    const json = []
    const isArr = Array.isArray(value) // 需要区分是否是数组

    // 遍历对象进行递归序列化
    for (const key in value) {
      let objVal = value[key]
      const type = typeof objVal

      if (type === 'string') {
        objVal = `"${objVal}"`
      } else if (type === 'object') {
        objVal = myStringify(objVal)
      }

      // 存放 key: value -- 数组不需要放 key
      json.push(`${isArr ? '' : `"${key}":`} ${objVal}`)
    }

    // 最外层的括号 -- 数组用 方括号 []，对象用 花括号 {}
    return `${isArr ? '[' : '{'}${json}${isArr ? ']' : '}'}`
  }
}

console.log(myStringify(foo))
