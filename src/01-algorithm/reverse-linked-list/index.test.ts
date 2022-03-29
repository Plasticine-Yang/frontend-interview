/**
 * @description 反转单向链表 -- 单元测试
 * @author 草帽Plasticine
 */

import { createLinkedList, reverseLinkedList, reverseLinkedList2 } from '.'

describe('反转单向链表 -- 使用三指针', () => {
  it('链表中只有一个元素', () => {
    const arr = [1]
    const list = createLinkedList(arr)
    const expectedList = createLinkedList(arr)

    const res = reverseLinkedList(list)

    expect(res).toEqual(expectedList)
  })

  it('正常情况', () => {
    const arr = [1, 2, 3, 4, 5]
    const expectedArr = [5, 4, 3, 2, 1]

    const list = createLinkedList(arr)
    const expectedList = createLinkedList(expectedArr)

    const res = reverseLinkedList(list)

    expect(res).toEqual(expectedList)
  })

  it('性能测试 -- 1000 个数据', () => {
    const n = 1000
    const arr = [...Array(n).keys()]
    const expectedArr = [...arr].reverse() // reverse 会改变原数组，用展开运算符做深拷贝

    const list = createLinkedList(arr)
    const expectedList = createLinkedList(expectedArr)

    const res = reverseLinkedList(list)

    expect(res).toEqual(expectedList)
  })
})

describe('反转单向链表 -- 使用 dummy 虚拟头结点', () => {
  it('链表中只有一个元素', () => {
    const arr = [1]
    const list = createLinkedList(arr)
    const expectedList = createLinkedList(arr)

    const res = reverseLinkedList2(list)

    expect(res).toEqual(expectedList)
  })

  it('正常情况', () => {
    const arr = [1, 2, 3, 4, 5]
    const expectedArr = [5, 4, 3, 2, 1]

    const list = createLinkedList(arr)
    const expectedList = createLinkedList(expectedArr)

    const res = reverseLinkedList2(list)

    expect(res).toEqual(expectedList)
  })

  it('性能测试 -- 1000 个数据', () => {
    const n = 1000
    const arr = [...Array(n).keys()]
    const expectedArr = [...arr].reverse() // reverse 会改变原数组，用展开运算符做深拷贝

    const list = createLinkedList(arr)
    const expectedList = createLinkedList(expectedArr)

    const res = reverseLinkedList2(list)

    expect(res).toEqual(expectedList)
  })
})
