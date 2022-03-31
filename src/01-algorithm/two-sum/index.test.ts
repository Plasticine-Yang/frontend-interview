/**
 * @description 两数之和 -- 单元测试
 * @author 草帽Plasticine
 */
import { twoSum, twoSum2 } from '.'

describe('两数之和 -- 暴力遍历', () => {
  it('正常情况', () => {
    const nums = [2, 7, 11, 5]
    const target = 9
    const expectedRes = [2, 7]

    const res = twoSum(nums, target)

    expect(res).toEqual(expectedRes)
  })

  it('不存在两数之和为 target', () => {
    const nums = [2, 7, 11, 5]
    const target = 20
    const expectedRes: number[] = []

    const res = twoSum(nums, target)

    expect(res).toEqual(expectedRes)
  })
})

describe('两数之和 -- 双指针', () => {
  it('正常情况', () => {
    const nums = [2, 7, 11, 5]
    const target = 9
    const expectedRes = [2, 7]

    const res = twoSum2(nums, target)
    console.log(res)

    expect(res).toEqual(expectedRes)
  })

  it('不存在两数之和为 target', () => {
    const nums = [2, 7, 11, 5]
    const target = 20
    const expectedRes: number[] = []

    const res = twoSum2(nums, target)

    expect(res).toEqual(expectedRes)
  })
})
