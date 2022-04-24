function sum(a, b) {
  return {
    value() {
      return a + b
    }
  }
}

function sum1(a) {
  return function (b) {
    return {
      value() {
        return a + b
      }
    }
  }
}

console.log(sum1(1)(2).value())
