/**
 * @description 反转单向链表
 * @author 草帽Plasticine
 */

/**
 * 链表结点
 */
interface ILinkedListNode<T = any> {
  value?: T
  next?: ILinkedListNode
}

/**
 * 根据数组创建单向链表
 * @param arr 数组
 */
export function createLinkedList<T>(arr: T[]): ILinkedListNode<T> {
  if (arr.length === 0) throw new Error('arr is empty')

  // 先创建一个结点
  const head: ILinkedListNode = {
    value: arr[0]
  }

  let cur: ILinkedListNode = head

  for (let i = 1; i < arr.length; i++) {
    const node = {
      value: arr[i]
    }
    cur.next = node
    cur = cur.next
  }

  return head
}

/**
 * 翻转一个单向链表 -- 使用三指针
 * @param head 链表头结点
 */
export function reverseLinkedList<T>(
  head: ILinkedListNode<T>
): ILinkedListNode<T> | undefined {
  let pre: ILinkedListNode<T> | undefined = undefined
  let cur: ILinkedListNode<T> | undefined = head
  let next: ILinkedListNode<T> | undefined = head.next

  while (cur) {
    cur.next = pre
    pre = cur
    cur = next
    next = next?.next
  }

  return pre
}

/**
 * 翻转一个单向链表 -- 使用 dummy 虚拟头结点
 * @param head 链表头结点
 * @returns 翻转后的单向链表头结点
 */
export function reverseLinkedList2<T>(
  head: ILinkedListNode<T>
): ILinkedListNode<T> | undefined {
  let dummy: ILinkedListNode<T> = {}
  let cur: ILinkedListNode<T> | undefined = head
  let next: ILinkedListNode<T> | undefined = cur.next

  while (cur) {
    cur.next = dummy.next
    dummy.next = cur
    cur = next
    next = next?.next
  }

  return dummy.next
}
