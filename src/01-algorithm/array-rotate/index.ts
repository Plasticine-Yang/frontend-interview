/**
 * @description Array rotate
 * @author 草帽Plasticine
 */

/**
 * 旋转数组 k 步 -- 使用 pop 和 unshift
 * @param arr arr
 * @param k k
 */
export function rotate1(arr: number[], k: number): number[] {
  const step = Math.abs(k % arr.length)

  for (let i = 0; i < step; i++) {
    const last = arr.pop()

    if (last) {
      arr.unshift(last)
    }
  }

  return arr
}

/**
 * 旋转数组 k 步 -- 使用 slice 和 concat
 * @param arr arr
 * @param k k
 */
export function rotate2(arr: number[], k: number): number[] {
  if (!k || arr.length === 0) return arr

  // if (k > arr.length) {
  //   k = k % arr.length
  // }

  // 考虑到 k 输入负数的情况，所以不用上面这种写法
  const step = Math.abs(k % arr.length)

  const arr1 = arr.slice(0, arr.length - step)
  // const arr2 = arr.slice(arr.length - k, arr.length)
  const arr2 = arr.slice(-step) // 与上面这种写法等价

  return arr2.concat(arr1)
}

// 功能测试
function testRotate1() {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  const k = 3

  const res = rotate1(arr, k)
  console.log(res)
}

function testRotate2() {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  const k = 3

  const res = rotate2(arr, k)
  console.log(res)
}

// testRotate1()
// testRotate2()
