/**
 * @description 两个栈实现一个队列 -- 单元测试
 * @author 草帽Plasticine
 */

import { MyQueue } from '.'

describe('两个栈实现一个队列', () => {
  it('add 和 length', () => {
    const q = new MyQueue<number>()
    expect(q.length).toBe(0)

    q.add(1)
    q.add(2)
    q.add(3)

    expect(q.length).toBe(3)
  })

  it('delete', () => {
    const q = new MyQueue<number>()
    expect(q.delete()).toBe(null)

    q.add(1)
    q.add(2)
    q.add(3)

    expect(q.delete()).toBe(1)
    expect(q.length).toBe(2)

    expect(q.delete()).toBe(2)
    expect(q.length).toBe(1)
  })
})
