Function.prototype.myBind = function (thisArg, ...argArray) {
  // 拿到被调用的函数
  const fn = this

  return function (...args) {
    // bind 返回的是一个函数，这个函数绑定了 thisArg，在这里面去执行 fn
    const fnKey = Symbol() // 使用 Symbol 防止 thisArg 中有同名 key 导致覆盖
    thisArg[fnKey] = fn

    // 执行函数
    const res = thisArg[fnKey](...argArray, ...args)

    // 执行完后将注入的临时属性删除
    delete thisArg[fnKey]

    return res
  }
}

function foo(a, b) {
  console.log(this)
  console.log(a, b)

  return 1
}

const obj = {
  name: 'obj'
}

const bindFoo = foo.myBind(obj, 1, 2)
const res = bindFoo()

console.log(res)

/**
 * output
  { name: 'obj', [Symbol()]: [Function: foo] }
  1 2
  1
 */
