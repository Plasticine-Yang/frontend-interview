/**
 * @description 数字千分位格式化 -- 单元测试
 * @author 草帽Plasticine
 */

import { thousandsFormat, thousandsFormat2 } from '.'

describe('数字千分位格式化 -- 使用数组', () => {
  test('正常情况', () => {
    const num = 12365178696
    const expectedRes = '12,365,178,696'

    const res = thousandsFormat(num)
    expect(res).toBe(expectedRes)
  })

  test('正好全都是千分位', () => {
    const num = 123456789
    const expectedRes = '123,456,789'

    const res = thousandsFormat(num)
    expect(res).toBe(expectedRes)
  })

  test('小于一千的数字', () => {
    const num = 123
    const expectedRes = '123'

    const res = thousandsFormat(num)
    expect(res).toBe(expectedRes)
  })
})

describe('数字千分位格式化 -- 使用字符串', () => {
  test('正常情况', () => {
    const num = 12365178696
    const expectedRes = '12,365,178,696'

    const res = thousandsFormat2(num)
    expect(res).toBe(expectedRes)
  })

  test('正好全都是千分位', () => {
    const num = 123456789
    const expectedRes = '123,456,789'

    const res = thousandsFormat2(num)
    expect(res).toBe(expectedRes)
  })

  test('小于一千的数字', () => {
    const num = 123
    const expectedRes = '123'

    const res = thousandsFormat2(num)
    expect(res).toBe(expectedRes)
  })
})
