function myNew(fn, ...args) {
  let obj = null

  // 构造函数需要是一个函数类型
  if (typeof fn !== 'function') {
    throw new Error('构造函数必须是一个函数！')
  }

  // 将 obj 的原型指向构造函数的 prototype
  obj = Object.create(fn.prototype)

  // 调用构造函数 将 this 显式绑定到 obj
  const result = fn.call(obj, ...args)

  // 判断返回类型是否是对象或函数，是的话则不会返回 obj
  const flag =
    result && (typeof result === 'object' || typeof result === 'function')

  return flag ? result : obj
}
