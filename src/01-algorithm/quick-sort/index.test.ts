/**
 * @description 快速排序 -- 单元测试
 * @author 草帽Plasticine
 */

import { quickSortWithSlice, quickSortWithSplice } from '.'

describe('快速排序 -- 使用 splice', () => {
  it('正常情况', () => {
    const arr = [6, 5, 4, 2, 6, 9, 10]
    const expectedRes = [2, 4, 5, 6, 6, 9, 10]

    const res = quickSortWithSplice(arr)

    expect(res).toEqual(expectedRes)
  })

  it('有负数', () => {
    const arr = [6, 5, -4, 2, -6, -9, 10]
    const expectedRes = [-9, -6, -4, 2, 5, 6, 10]

    const res = quickSortWithSplice(arr)

    expect(res).toEqual(expectedRes)
  })

  it('全部元素一样', () => {
    const arr = [6, 6, 6, 6, 6]
    const expectedRes = [6, 6, 6, 6, 6]

    const res = quickSortWithSplice(arr)

    expect(res).toEqual(expectedRes)
  })
  it('空数组', () => {
    const arr: number[] = []
    const expectedRes: number[] = []

    const res = quickSortWithSplice(arr)

    expect(res).toEqual(expectedRes)
  })
})

describe('快速排序 -- 使用 slice', () => {
  it('正常情况', () => {
    const arr = [6, 5, 4, 2, 6, 9, 10]
    const expectedRes = [2, 4, 5, 6, 6, 9, 10]

    const res = quickSortWithSlice(arr)

    expect(res).toEqual(expectedRes)
  })

  it('有负数', () => {
    const arr = [6, 5, -4, 2, -6, -9, 10]
    const expectedRes = [-9, -6, -4, 2, 5, 6, 10]

    const res = quickSortWithSlice(arr)

    expect(res).toEqual(expectedRes)
  })

  it('全部元素一样', () => {
    const arr = [6, 6, 6, 6, 6]
    const expectedRes = [6, 6, 6, 6, 6]

    const res = quickSortWithSlice(arr)

    expect(res).toEqual(expectedRes)
  })
  it('空数组', () => {
    const arr: number[] = []
    const expectedRes: number[] = []

    const res = quickSortWithSlice(arr)

    expect(res).toEqual(expectedRes)
  })
})
it
