/**
 * @description 用两个栈实现一个队列
 * @author 草帽Plasticine
 */

/**
 * T -- 队列中存放的元素类型
 */
export class MyQueue<T = any> {
  private stack1: T[] = []
  private stack2: T[] = []

  /**
   * 入队
   * @param data 入队元素
   */
  add(data: T): void {
    this.stack1.push(data)
  }

  /**
   * 出队
   * @returns 队头元素 或 null
   */
  delete(): T | null {
    let res = null
    let temp = null

    while (this.stack1.length) {
      temp = this.stack1.pop()
      if (temp) {
        this.stack2.push(temp)
      }
    }

    res = this.stack2.pop()

    while (this.stack2.length) {
      temp = this.stack2.pop()
      if (temp) {
        this.stack1.push(temp)
      }
    }

    return res || null
  }

  /**
   * 队列长度 -- 用 get 关键字修饰代表可以作为属性调用
   */
  get length(): number {
    return this.stack1.length
  }
}
