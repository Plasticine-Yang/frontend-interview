import { rotate1, rotate2 } from './index'

const scopeRotate1 = 'rotate1'
const scopeRotate2 = 'rotate2'

describe(`[${scopeRotate1}]将数组旋转 k 步`, () => {
  it('k 小于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3

    const res = rotate1(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

  it('k 大于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = arr.length + 1

    const res = rotate1(arr, k)
    expect(res).toEqual([7, 1, 2, 3, 4, 5, 6])
  })

  it('k 为负数且绝对值小于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = -3

    const res = rotate1(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

  it('k 为负数且绝对值大于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = -(arr.length + 1)

    const res = rotate1(arr, k)
    expect(res).toEqual([7, 1, 2, 3, 4, 5, 6])
  })

  it('空数组', () => {
    const arr: number[] = []
    const k = 3

    const res = rotate1(arr, k)
    expect(res).toEqual([])
  })

  it('k 不是 number', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 'abc'

    // @ts-ignore
    const res = rotate1(arr, k)
    expect(res).toEqual(arr)
  })

  it('k == 0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 0

    const res = rotate1(arr, k)
    expect(res).toEqual(arr)
  })
})

describe(`[${scopeRotate2}]将数组旋转 k 步`, () => {
  it('k 小于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3

    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

  it('k 大于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = arr.length + 1

    const res = rotate2(arr, k)
    expect(res).toEqual([7, 1, 2, 3, 4, 5, 6])
  })

  it('k 为负数且绝对值小于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = -3

    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

  it('k 为负数且绝对值大于数组长度', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = -(arr.length + 1)

    const res = rotate2(arr, k)
    expect(res).toEqual([7, 1, 2, 3, 4, 5, 6])
  })

  it('空数组', () => {
    const arr: number[] = []
    const k = 3

    const res = rotate2(arr, k)
    expect(res).toEqual([])
  })

  it('k 不是 number', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 'abc'

    // @ts-ignore
    const res = rotate2(arr, k)
    expect(res).toEqual(arr)
  })

  it('k == 0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 0

    const res = rotate2(arr, k)
    expect(res).toEqual(arr)
  })
})
