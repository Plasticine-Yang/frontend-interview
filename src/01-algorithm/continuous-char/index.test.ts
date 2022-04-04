/**
 * @description 获取字符串中连续最多的字符以及次数 -- 单元测试
 * @author 草帽Plasticine
 */

import { findContinuousChar, findContinuousChar2, IRes } from '.'

describe('获取字符串中连续最多的字符以及次数 -- 嵌套循环', () => {
  it('正常情况', () => {
    const str = 'abbcccddddeeeee12345'
    const expectedRes: IRes = {
      char: 'e',
      length: 5
    }

    const res = findContinuousChar(str)

    expect(res).toEqual(expectedRes)
  })

  it('全部连续字符串', () => {
    const str = 'aaaaa'
    const expectedRes: IRes = {
      char: 'a',
      length: 5
    }

    const res = findContinuousChar(str)

    expect(res).toEqual(expectedRes)
  })

  it('空字符串', () => {
    const str = ''
    const expectedRes: IRes = {
      char: '',
      length: 0
    }

    const res = findContinuousChar(str)

    expect(res).toEqual(expectedRes)
  })

  it('无连续字符串', () => {
    const str = 'abcdefg'
    const expectedRes: IRes = {
      char: 'a',
      length: 1
    }

    const res = findContinuousChar(str)

    expect(res).toEqual(expectedRes)
  })
})

describe('获取字符串中连续最多的字符以及次数 -- 双指针', () => {
  it('正常情况', () => {
    const str = 'abbcccddddeeeee12345'
    const expectedRes: IRes = {
      char: 'e',
      length: 5
    }

    const res = findContinuousChar2(str)

    expect(res).toEqual(expectedRes)
  })

  it('全部连续字符串', () => {
    const str = 'aaaaa'
    const expectedRes: IRes = {
      char: 'a',
      length: 5
    }

    const res = findContinuousChar2(str)

    expect(res).toEqual(expectedRes)
  })

  it('空字符串', () => {
    const str = ''
    const expectedRes: IRes = {
      char: '',
      length: 0
    }

    const res = findContinuousChar2(str)

    expect(res).toEqual(expectedRes)
  })

  it('无连续字符串', () => {
    const str = 'abcdefg'
    const expectedRes: IRes = {
      char: 'a',
      length: 1
    }

    const res = findContinuousChar2(str)

    expect(res).toEqual(expectedRes)
  })
})
