/**
 * @description 获取字符串中连续最多的字符以及次数
 * @author 草帽Plasticine
 */

export interface IRes {
  char: string
  length: number
}

/**
 * 获取字符串中连续最多的字符以及次数 -- 嵌套循环
 * @param str 字符串
 */
export function findContinuousChar(str: string): IRes {
  const res: IRes = {
    char: '',
    length: 0
  }

  // base case
  if (str.length === 0) return res

  for (let j = 0; j < str.length; j++) {
    let length = 0

    for (let i = j; i < str.length; i++) {
      if (str[i] === str[j]) {
        length++
      }
      if (str[i] !== str[j] || i === str.length - 1) {
        // 更新 length 的时机: 1. 不相等 2. i 已经遍历到最后一个字符(eg. aaaaa -- 全部连续的字符串会进入这个判断逻辑)
        // 判断是否要更新 res 中的 length
        if (length > res.length) {
          res.char = str[j]
          res.length = length
        }

        if (j < str.length - 1) {
          j = i // 让 j 跳步到 i 这里
          j-- // 抵消外层循环的 j++
        }
        break
      }
    }
  }

  return res
}

/**
 * 获取字符串中连续最多的字符以及次数 -- 双指针
 * @param str 字符串
 */
export function findContinuousChar2(str: string): IRes {
  const res: IRes = {
    char: '',
    length: 0
  }

  // base case
  if (str.length === 0) return res

  // 双指针
  let i = 0
  let j = 0
  let length = 0

  for (; i < str.length; i++) {
    if (str[i] === str[j]) length++
    if (str[i] !== str[j] || i === str.length - 1) {
      // 不相等或者 i 遍历到末尾(全部连续字符串)
      if (length > res.length) {
        res.char = str[j]
        res.length = length
      }
      length = 0 // 重置计数

      // i 没有到最后一个才需要和 i++ 抵消，否则会死循环
      if (i < str.length - 1) {
        j = i
        i--
      }
    }
  }

  return res
}
