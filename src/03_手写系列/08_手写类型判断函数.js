function myTypeof(obj) {
  // 调用 toString 方法获取对象的构造函数原型的函数名
  const rawName = Object.prototype.toString.call(obj) // [object xxx]

  // 从第 8 位开始截取到最后一位即为对应的类型名
  const type = rawName.slice(8, -1)

  return type
}

console.log(myTypeof(1))
console.log(myTypeof('1'))
console.log(myTypeof(true))
console.log(myTypeof(false))
console.log(myTypeof([]))
console.log(myTypeof({}))
