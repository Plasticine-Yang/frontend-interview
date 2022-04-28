const MyPromise = require('./MyPromise')

// const myPromise1 = new MyPromise((resolve, reject) => {
//   resolve('plasticine')
// })

// const myPromise2 = myPromise1.then((value) => {
//   return myPromise2
// })

// myPromise2.then(
//   (value) => {
//     console.log(value)
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )

const promise1 = new MyPromise((resolve, reject) => {
  resolve('plasticine')
})

const promise2 = promise1.then(
  (value) => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve(value)
      }, 2000)
    })
  },
  (reason) => {
    return reason
  }
)

promise2.then(
  (value) => {
    console.log(value)
  },
  (reason) => {
    console.log(reason)
  }
)

// => plasticine
