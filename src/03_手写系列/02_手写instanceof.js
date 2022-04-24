function myInstanceof(left, right) {
  let leftProto = Object.getPrototypeOf(left)
  const rightPrototype = right.prototype

  while (leftProto !== rightPrototype) {
    if (leftProto === null) return false
    leftProto = Object.getPrototypeOf(leftProto)
  }

  return true
}

function Foo() {}
function Bar() {}

const obj = new Foo()

console.log(obj instanceof Bar)
console.log(myInstanceof(obj, Bar))
