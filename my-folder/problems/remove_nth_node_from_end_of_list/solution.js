/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
//We want to return the head after everything
	let dummyHead = {next: head};
	let slow = dummyHead;
	let fast = dummyHead;
//let fast run n nodes ahead
	for (let i=1; i<=n; i++){
		fast= fast.next;
	}
//Once we are not at the head, let move one node each
while(fast.next){
	fast= fast.next;
	slow= slow.next
}
slow.next = slow.next.next
    return dummyHead.next
};