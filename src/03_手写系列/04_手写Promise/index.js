const MyPromise = require('./MyPromise')

const p = new MyPromise((resolve, reject) => {
  resolve('resolved value')
})

p.then((value) => {
  return MyPromise.resolve(value)
})
  .then((value) => {
    console.log(value)

    return MyPromise.reject('error...')
  })
  .catch((reason) => {
    console.log(reason)
  })

// =>
// resolved value
// error...
