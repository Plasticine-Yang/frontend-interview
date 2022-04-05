/**
 * @description 寻找指定范围内的对称数（回文数） -- 单元测试
 * @author 草帽Plasticine
 */

import { findPalindrome1, findPalindrome2, findPalindrome3 } from '.'

describe('寻找指定范围内的对称数（回文数） -- 使用数组 API', () => {
  test('正常情况', () => {
    const max = 200
    const expectedRes = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191
    ]

    const res = findPalindrome1(max)
    expect(res).toEqual(expectedRes)
  })

  test('max <= 0', () => {
    const max = 0
    const expectedRes: number[] = []

    const res = findPalindrome1(max)
    expect(res).toEqual(expectedRes)
  })
})

describe('寻找指定范围内的对称数（回文数） -- 比较字符串头尾', () => {
  test('正常情况', () => {
    const max = 200
    const expectedRes = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191
    ]

    const res = findPalindrome2(max)
    expect(res).toEqual(expectedRes)
  })

  test('max <= 0', () => {
    const max = 0
    const expectedRes: number[] = []

    const res = findPalindrome2(max)
    expect(res).toEqual(expectedRes)
  })
})

describe('寻找指定范围内的对称数（回文数） -- 利用数学原理（取余）', () => {
  test('正常情况', () => {
    const max = 200
    const expectedRes = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191
    ]

    const res = findPalindrome3(max)
    expect(res).toEqual(expectedRes)
  })

  test('max <= 0', () => {
    const max = 0
    const expectedRes: number[] = []

    const res = findPalindrome3(max)
    expect(res).toEqual(expectedRes)
  })
})

test('性能测试', () => {
  const max = 100 * 10000

  console.time('使用数组 API')
  findPalindrome1(max)
  console.timeEnd('使用数组 API')

  console.time('比较字符串头尾')
  findPalindrome2(max)
  console.timeEnd('比较字符串头尾')

  console.time('利用数学原理（取余）')
  findPalindrome3(max)
  console.timeEnd('利用数学原理（取余）')
})
