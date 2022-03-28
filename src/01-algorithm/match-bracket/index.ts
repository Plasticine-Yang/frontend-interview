/**
 * 判断左右括号是否匹配
 * @param left 左括号
 * @param right 右括号
 */
function isMatch(left: string, right: string): boolean {
  if (left === '(' && right === ')') return true
  if (left === '[' && right === ']') return true
  if (left === '{' && right === '}') return true

  return false
}

export function matchBracket(str: string): boolean {
  const leftBrackets = '([{'
  const rightBrackets = ')]}'

  const stack = []

  for (let i = 0; i < str.length; i++) {
    const cur = str[i]

    // 左括号 -- 入栈
    if (leftBrackets.includes(cur)) {
      stack.push(cur)
    } else if (rightBrackets.includes(cur)) {
      // 右括号
      if (isMatch(stack[stack.length - 1], cur)) {
        // cur 和栈顶左括号匹配上了 -- 出栈
        stack.pop()
      } else {
        // 只要有一个括号不匹配就返回 false
        return false
      }
    }
  }

  return stack.length === 0 // 若全部匹配完 -- 栈应当是空的
}
