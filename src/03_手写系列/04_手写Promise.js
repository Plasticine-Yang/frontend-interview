const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(executor) {
  // 初始化状态为 pending
  this.state = PENDING

  // 保存 resolve 或 reject 传入的值
  this.value = null

  // resolve 回调队列
  this.resolvedCallbacks = []

  // reject 回调队列
  this.rejectedCallbacks = []

  function resolve(value) {}
  function reject(reason) {}
}
