/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = {next: null}
	let tail = dummyHead;
//The while loop runs as long as one of the linked list has not been exhausted.
while(list1 && list2){
	if(list1.val < list2.val){
	tail.next = list1
	tail = tail.next 
	list1 = list1.next
}else{
	tail.next = list2
	tail = tail.next
	list2 = list2.next	
}
	}
//Once we get here, one of the linked lists has been exhausted
	tail.next = list1 || list2
return dummyHead.next;
};
