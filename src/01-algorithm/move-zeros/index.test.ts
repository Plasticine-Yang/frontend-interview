/**
 * @description 移动 0 到数组末尾 -- 单元测试
 * @author 草帽Plasticine
 */

import { moveZeroes, moveZeroes2 } from '.'

describe('移动 0 到数组末尾 -- 暴力遍历', () => {
  it('正常情况', () => {
    const testArr1 = [1, 2, 5, 0, 2, 0, 3, 4, 0, 2, 0, 1, 6]
    const expectedRes1 = [1, 2, 5, 2, 3, 4, 2, 1, 6, 0, 0, 0, 0]

    const testArr2 = [0, 1, 0, 3, 12]
    const expectedRes2 = [1, 3, 12, 0, 0]

    const testArr3 = [0, 0, 1]
    const expectedRes3 = [1, 0, 0]

    moveZeroes(testArr1)
    moveZeroes(testArr2)
    moveZeroes(testArr3)

    expect(testArr1).toEqual(expectedRes1)
    expect(testArr2).toEqual(expectedRes2)
    expect(testArr3).toEqual(expectedRes3)
  })

  it('没有 0', () => {
    const arr = [1, 2, 5, 2, 3, 4, 2, 1, 6]
    const expectedRes = [1, 2, 5, 2, 3, 4, 2, 1, 6]

    moveZeroes(arr)

    expect(arr).toEqual(expectedRes)
  })

  it('全是 0', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0]
    const expectedRes = [0, 0, 0, 0, 0, 0, 0]

    moveZeroes(arr)
    expect(arr).toEqual(expectedRes)
  })
})

describe('移动 0 到数组末尾 -- 双指针', () => {
  it('正常情况', () => {
    const testArr1 = [1, 2, 5, 0, 2, 0, 3, 4, 0, 2, 0, 1, 6]
    const expectedRes1 = [1, 2, 5, 2, 3, 4, 2, 1, 6, 0, 0, 0, 0]

    const testArr2 = [0, 1, 0, 3, 12]
    const expectedRes2 = [1, 3, 12, 0, 0]

    const testArr3 = [0, 0, 1]
    const expectedRes3 = [1, 0, 0]

    moveZeroes2(testArr1)
    moveZeroes2(testArr2)
    moveZeroes2(testArr3)

    expect(testArr1).toEqual(expectedRes1)
    expect(testArr2).toEqual(expectedRes2)
    expect(testArr3).toEqual(expectedRes3)
  })

  it('没有 0', () => {
    const arr = [1, 2, 5, 2, 3, 4, 2, 1, 6]
    const expectedRes = [1, 2, 5, 2, 3, 4, 2, 1, 6]

    moveZeroes2(arr)

    expect(arr).toEqual(expectedRes)
  })

  it('全是 0', () => {
    const arr = [0, 0, 0, 0, 0, 0, 0]
    const expectedRes = [0, 0, 0, 0, 0, 0, 0]

    moveZeroes2(arr)
    expect(arr).toEqual(expectedRes)
  })
})
