/**
 * @description 寻找指定范围内的对称数（回文数）
 * @author 草帽Plasticine
 */

/**
 * 寻找对称数 -- 使用数组操作
 * @param max 最大值
 */
export function findPalindrome1(max: number): number[] {
  // base case
  if (max <= 0) return []

  // 使用数组 API -- 将数字转成字符串、再转成数组、再翻转、再转成字符串判断
  const res: number[] = []
  for (let i = 1; i < max; i++) {
    const str = i.toString()
    if (str === str.split('').reverse().join('')) res.push(i)
  }

  return res
}

/**
 * 寻找对称数 -- 比较字符串头尾
 * @param max 最大值
 */
export function findPalindrome2(max: number): number[] {
  // base case
  if (max <= 0) return []

  const res: number[] = []
  for (let i = 1; i < max; i++) {
    const str = i.toString()
    let start = 0
    let end = str.length - 1
    let flag = true

    while (start < end) {
      if (str[start] !== str[end]) {
        flag = false
        break
      }

      start++
      end--
    }

    if (flag) res.push(i)
  }

  return res
}

/**
 * 寻找对称数 -- 利用数学原理（取余）
 * @param max 最大值
 */
export function findPalindrome3(max: number): number[] {
  // base case
  if (max <= 0) return []

  // 将数字翻转后比较
  const res: number[] = []
  for (let i = 1; i < max; i++) {
    // 翻转数字
    let n = i

    // n == 123
    let rev = 0
    while (n > 0) {
      rev = rev * 10 + (n % 10)
      n = Math.floor(n / 10)
    }

    if (rev === i) res.push(i)
  }

  return res
}
