/**
 * @description 0-1 背包问题
 * @author 草帽Plasticine
 */

/**
 * 0-1 背包问题
 * @param N 可选择的物品数量
 * @param W 背包的最大容量
 * @param wt 各个物品的重量
 * @param val 各个物品的价值
 *
 * @returns 能得到的最大价值
 */
export function knapsackProblem(
  N: number,
  W: number,
  wt: number[],
  val: number[]
): number {
  // 1. 初始化 dp 数组
  const dp: number[][] = new Array(N + 1)
  // 初始化 dp 数组时已将 base case 处理好了
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(W + 1).fill(0)

  // 2. 状态转移
  for (let i = 1; i < N + 1; i++) {
    for (let w = 1; w < W + 1; w++) {
      // 放入后容量不足的情况
      if (w - wt[i - 1] < 0) {
        dp[i][w] = dp[i - 1][w] // 无论价值是否增加都不放入背包
      } else {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - wt[i - 1]] + val[i - 1])
      }
    }
  }

  return dp[N][W]
}
