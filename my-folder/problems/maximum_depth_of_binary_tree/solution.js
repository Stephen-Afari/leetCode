/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
//helper function
let maxDpth=0;
const dive = (node, currDepth)=>{
if(!node){
	maxDpth = Math.max(currDepth -1, maxDpth)
	return;
}	
//recursively call on the left and right
	dive(node.left, currDepth +1);
	dive(node.right, currDepth +1);
}
	dive(root,1);
return maxDpth;
    
};