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

// const promise1 = new MyPromise((resolve, reject) => {
//   resolve('plasticine')
// })

// const promise2 = promise1.then(
//   (value) => {
//     return value
//   },
//   (reason) => {
//     return reason
//   }
// )

// promise2
//   .then()
//   .then()
//   .then()
//   .then((value) => {
//     console.log(value)
//   })

new MyPromise((resolve, reject) => {
  resolve('xxx')
  reject(new Error('yyy'))
})
  .then((value) => {
    console.log(value)
  })
  .catch((reason) => {
    console.log(reason)
  })

// => plasticine
