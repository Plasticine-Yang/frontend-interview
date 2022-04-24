// 让对象的原型指向传入的对象
function create(obj) {
  function fn() {}
  fn.prototype = obj

  return new fn()
}
