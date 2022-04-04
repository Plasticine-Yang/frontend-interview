/**
 * @description 快速排序
 * @author 草帽Plasticine
 */

/**
 * 快速排序 -- 使用 splice（修改原数组）
 * @param arr 数组
 */
export function quickSortWithSplice(arr: number[]): number[] {
  // base case
  if (arr.length === 0) return arr

  // 获取中间元素
  const midIndex = Math.floor(arr.length / 2)
  const midValue = arr.splice(midIndex, 1)[0]

  // 以中间元素为分界点分成左右两个数组
  const leftArr: number[] = []
  const rightArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    // 比 midValue 小的放左边，大的放右边
    if (num < midValue) leftArr.push(num)
    else rightArr.push(num)
  }

  // 递归将左右数组排序好后拼接起来即可
  return quickSortWithSplice(leftArr).concat(
    [midValue],
    quickSortWithSplice(rightArr)
  )
}

/**
 * 快速排序 -- 使用 slice（不修改原数组）
 * @param arr 数组
 */
export function quickSortWithSlice(arr: number[]): number[] {
  const length = arr.length

  // base case
  if (length === 0) return arr

  // 获取中间元素
  const midIndex = Math.floor(arr.length / 2)
  const midValue = arr.slice(midIndex, midIndex + 1)[0]

  // 以中间元素为分界点分成左右两个数组
  const leftArr: number[] = []
  const rightArr: number[] = []

  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      const num = arr[i]

      if (num < midValue) leftArr.push(num)
      else rightArr.push(num)
    }
  }

  return quickSortWithSlice(leftArr).concat(
    [midValue],
    quickSortWithSlice(rightArr)
  )
}
