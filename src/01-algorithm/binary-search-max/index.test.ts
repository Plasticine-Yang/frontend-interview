/**
 * @description 二叉搜索增序数组中 target 的最后一个元素 -- 单元测试
 * @author 草帽Plasticine
 */

import { binarySearchMax } from '.'

describe('二叉搜索增序数组中 target 的最后一个元素', () => {
  test('正常情况', () => {
    const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 10]
    const target = 6
    const expectedRes = 8

    const res = binarySearchMax(arr, target)

    expect(res).toBe(expectedRes)
  })
  test('mid刚好是最后一个', () => {
    const arr = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 10]
    const target = 5
    const expectedRes = 5

    const res = binarySearchMax(arr, target)

    expect(res).toBe(expectedRes)
  })
  test('空数组', () => {
    const arr: number[] = []
    const target = 6
    const expectedRes = -1

    const res = binarySearchMax(arr, target)

    expect(res).toBe(expectedRes)
  })
})
