/**
 * @description 移动 0 到数组末尾
 * @author 草帽Plasticine
 */

/**
 * 移动 0 到数组末尾 -- 暴力遍历
 * @param nums 数组
 */
export function moveZeroes(nums: number[]): void {
  let zeroLength = 0 // 统计 0 的数量 减少遍历次数

  // 1. 遍历 nums
  for (let i = 0; i < nums.length - zeroLength; i++) {
    if (nums[i] === 0) {
      // 遇到 0 就 push 到数组末尾，并且将 0 从数组中 splice 掉
      nums.push(0)
      nums.splice(i, 1)

      i--
      zeroLength++
    }
  }
}

/**
 * 移动 0 到数组末尾 -- 双指针
 * @param nums 数组
 */
export function moveZeroes2(nums: number[]): void {
  let i // 指向 j 之后的第一个 非零元素
  let j = -1 // 指向 nums 的第一个 0

  for (i = 0; i < nums.length; i++) {
    // 第一个 0 -- 初始化 j
    if (nums[i] === 0 && j < 0) j = i
    else if (nums[i] !== 0 && j >= 0) {
      // j 已经初始化 -- 交换 i 和 j
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp

      j++
    }
  }
}
