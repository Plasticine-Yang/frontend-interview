/**
 * @description 二叉搜索增序数组中 target 的最后一个元素
 * @author 草帽Plasticine
 */

/**
 * 二叉搜索增序数组中 target 的最后一个元素
 * @param data 增序数组
 * @param target 目标元素
 * @returns target 在 data 中最后出现时的下标
 */
export function binarySearchMax(data: number[], target: number): number {
  let left = 0
  let right = data.length - 1

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (data[mid] <= target) left = mid + 1
    else right = mid - 1
  }

  if (data[right] === target) return right

  return -1
}
