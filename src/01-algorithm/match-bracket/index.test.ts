import { matchBracket } from '.'

describe('字符串括号匹配', () => {
  it('括号匹配', () => {
    const str1 = '(abc)'
    const str2 = '(ab[cd]ef)'
    const str3 = '(ab[cd]e{f})'
    const str4 = '()'
    const str5 = '[]'
    const str6 = '{}'

    expect(matchBracket(str1)).toBe(true)
    expect(matchBracket(str2)).toBe(true)
    expect(matchBracket(str3)).toBe(true)
    expect(matchBracket(str4)).toBe(true)
    expect(matchBracket(str5)).toBe(true)
    expect(matchBracket(str6)).toBe(true)
  })

  it('括号不匹配 -- 顺序不一致', () => {
    const str1 = '(abc[def)hij]'
    const str2 = '(abc{def)hij}'
    const str3 = 'abc{def)h(ij}'

    expect(matchBracket(str1)).toBe(false)
    expect(matchBracket(str2)).toBe(false)
    expect(matchBracket(str3)).toBe(false)
  })

  it('括号不匹配 -- 括号数量不匹配', () => {
    const str1 = '(abc[def)'
    const str2 = '[abc[def)'
    const str3 = '{abc[def)'
    const str4 = '{{asd}fqwe]'

    expect(matchBracket(str1)).toBe(false)
    expect(matchBracket(str2)).toBe(false)
    expect(matchBracket(str3)).toBe(false)
    expect(matchBracket(str4)).toBe(false)
  })

  it('空字符串', () => {
    const str = ''

    expect(matchBracket(str)).toBe(true)
  })
})
