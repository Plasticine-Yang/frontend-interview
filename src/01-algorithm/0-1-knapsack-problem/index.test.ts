/**
 * @description 0-1 背包问题 -- 单元测试
 * @author 草帽Plasticine
 */

import { knapsackProblem } from '.'

describe('0-1背包问题', () => {
  test('正常用例1', () => {
    const N = 3
    const W = 4
    const wt = [2, 1, 3]
    const val = [4, 2, 3]
    const expectedRes = 6

    const res = knapsackProblem(N, W, wt, val)

    expect(res).toBe(expectedRes)
  })
  test('正常用例2', () => {
    const N = 2
    const W = 3
    const wt = [2, 1]
    const val = [4, 2]
    const expectedRes = 6

    const res = knapsackProblem(N, W, wt, val)

    expect(res).toBe(expectedRes)
  })
  test('正常用例3', () => {
    const N = 5
    const W = 10
    const wt = [2, 4, 3, 1, 6]
    const val = [1, 5, 2, 1, 8]
    const expectedRes = 13

    const res = knapsackProblem(N, W, wt, val)

    expect(res).toBe(expectedRes)
  })
  test('只有一个物品且不超出背包容量', () => {
    const N = 1
    const W = 3
    const wt = [2]
    const val = [4]
    const expectedRes = 4

    const res = knapsackProblem(N, W, wt, val)

    expect(res).toBe(expectedRes)
  })
  test('只有一个物品且超出背包容量', () => {
    const N = 1
    const W = 3
    const wt = [6]
    const val = [4]
    const expectedRes = 0

    const res = knapsackProblem(N, W, wt, val)

    expect(res).toBe(expectedRes)
  })
  test('背包最大容量为0', () => {
    const N = 3
    const W = 0
    const wt = [2, 1, 3]
    const val = [4, 2, 3]
    const expectedRes = 0

    const res = knapsackProblem(N, W, wt, val)

    expect(res).toBe(expectedRes)
  })
  test('没有可选择的物品', () => {
    const N = 0
    const W = 4
    const wt: number[] = []
    const val: number[] = []
    const expectedRes = 0

    const res = knapsackProblem(N, W, wt, val)

    expect(res).toBe(expectedRes)
  })
})
