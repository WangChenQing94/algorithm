// 两数相加
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumber(l1 *ListNode, l2 *ListNode) *ListNode {
	fmt.Println(l1)
	return &ListNode{Val: 1}
}

func main() {
	result := addTwoNumber(&ListNode{Val: 1}, &ListNode{Val: 1})
	fmt.Println(result)
}
