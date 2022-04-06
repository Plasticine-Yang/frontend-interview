/**
 * @description 切换字母大小写
 * @author 草帽Plasticine
 */

/**
 * 切换字母大小写 -- 正则表达式
 * @param str 字符串
 */
export function switchLetterCase1(str: string): string {
  let res = ''

  // base case
  if (str.length === 0) return res

  // 正则表达式模式
  const lowerPattern = /[a-z]/
  const upperPattern = /[A-Z]/

  // 遍历字符串
  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    if (lowerPattern.test(c)) {
      // 小写转大写
      res += c.toUpperCase()
    } else if (upperPattern.test(c)) {
      // 大写转小写
      res += c.toLowerCase()
    } else {
      // 非字母不做更改
      res += c
    }
  }

  return res
}

/**
 * 切换字母大小写 -- ASCII
 * @param str 字符串
 */
export function switchLetterCase2(str: string): string {
  let res = ''

  // base case
  if (str.length === 0) return res

  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    const charCode = c.charCodeAt(0)

    if (charCode >= 65 && charCode < 91) {
      // 大写字母转小写
      res += c.toLowerCase()
    } else if (charCode >= 97 && charCode < 123) {
      // 小写字母转大写
      res += c.toUpperCase()
    } else {
      res += c
    }
  }

  return res
}
