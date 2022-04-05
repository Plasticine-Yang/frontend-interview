/**
 * @description 数字千分位格式化
 * @author 草帽Plasticine
 */

/**
 * 数字千分位格式化 -- 使用数组
 * @param num 数字
 */
export function thousandsFormat(num: number): string {
  // 将数字转成字符串数组并逆序 -- 从尾到头遍历
  const strArr = num.toString().split('').reverse()

  return strArr.reduce((prev, cur, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return cur + ',' + prev
      } else {
        return cur
      }
    } else {
      return cur + prev
    }
  }, '')
}

/**
 * 数字千分位格式化 -- 使用字符串
 * @param num 数字
 */
export function thousandsFormat2(num: number): string {
  const str = num.toString()

  // 要从后往前遍历
  let res = ''
  for (let i = str.length - 1; i >= 0; i--) {
    let j = str.length - i
    if (j % 3 === 0) {
      if (i !== 0) res = ',' + str[i] + res
      else res = str[i] + res
    } else {
      res = str[i] + res
    }
  }

  return res
}
