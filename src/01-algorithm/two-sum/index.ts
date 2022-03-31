/**
 * @description 两数之和 -- 找出数组中和为 n 的两个数
 * @author 草帽Plasticine
 */

/**
 * 暴力两层遍历
 * @param nums 数组
 * @param target 目标值
 */
export function twoSum(nums: number[], target: number): number[] {
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(nums[i])
        res.push(nums[j])
        return res
      }
    }
  }

  return res
}

/**
 * 双指针解法
 * 先将 nums 递增排序
 * 让 i 和 j 分别从数组头和数组尾开始遍历
 * 如果 nums[i] + nums[j] > target -- 说明要让两数之和减小，即 j--
 * 如果 nums[i] + nums[j] < target -- 说明要让两数之和增大，即 i++
 * @param nums 数组
 * @param target 目标值
 */
export function twoSum2(nums: number[], target: number): number[] {
  const res: number[] = []

  // 1. 先将 nums 递增排序
  nums.sort((a, b) => a - b)

  // 2. 双指针开始遍历
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    const sum = nums[i] + nums[j]
    if (sum > target) j--
    else if (sum < target) i++
    else {
      res.push(nums[i])
      res.push(nums[j])
      return res
    }
  }

  return res
}
