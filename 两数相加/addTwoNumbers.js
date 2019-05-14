/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */

var addTwoNumbers = function (one, two) {
  var len = one.length > two.length ? one.length : two.length;
  var sum = [];
  for (var i = 0; i < len; i++) {
    var add = Number(one[i] || 0) +  Number(two[i] || 0);
    if (add >= 10) {
      sum[i - 1] += 1;
      add = Number(add.toString().split('').splice(1, 1));
    }
    sum.push(add);
  }

  return sum.reverse();
}

console.log(addTwoNumbers([2,4,3], [5,6,4]));