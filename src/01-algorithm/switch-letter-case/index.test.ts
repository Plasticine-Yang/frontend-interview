/**
 * @description 切换字母大小写 -- 单元测试
 * @author 草帽Plasticine
 */

import { switchLetterCase1, switchLetterCase2 } from '.'

describe('切换字母大小写 -- 正则表达式', () => {
  test('正常情况', () => {
    const str = '123abc#AsD%Qwer'
    const expectedRes = '123ABC#aSd%qWER'

    const res = switchLetterCase1(str)

    expect(res).toBe(expectedRes)
  })

  test('空字符串', () => {
    const str = ''
    const expectedRes = ''

    const res = switchLetterCase1(str)

    expect(res).toBe(expectedRes)
  })

  test('非字母', () => {
    const str = '123456!@#$%^&'
    const expectedRes = '123456!@#$%^&'

    const res = switchLetterCase1(str)

    expect(res).toBe(expectedRes)
  })
})

describe('切换字母大小写 -- ASCII', () => {
  test('正常情况', () => {
    const str = '123abc#AsD%Qwer'
    const expectedRes = '123ABC#aSd%qWER'

    const res = switchLetterCase2(str)

    expect(res).toBe(expectedRes)
  })

  test('空字符串', () => {
    const str = ''
    const expectedRes = ''

    const res = switchLetterCase2(str)

    expect(res).toBe(expectedRes)
  })

  test('非字母', () => {
    const str = '123456!@#$%^&'
    const expectedRes = '123456!@#$%^&'

    const res = switchLetterCase2(str)

    expect(res).toBe(expectedRes)
  })
})

describe('性能测试', () => {
  test('正则表达式', () => {
    const n = 10 * 10000
    for (let i = 0; i < n; i++) {
      const str =
        '123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer'
      switchLetterCase1(str)
    }
  })

  test('ASCII', () => {
    const n = 10 * 10000
    for (let i = 0; i < n; i++) {
      const str =
        '123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer123abc#AsD%Qwer'
      switchLetterCase2(str)
    }
  })
})
