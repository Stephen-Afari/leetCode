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
 * @return {TreeNode}
 */
var invertTree = function(root) {
const helper = (node)=>{
//base case
	if(!node) return;

const temp = node.left;
	node.left = node.right;
	node.right = temp;

	helper(node.left);
	helper(node.right);
}
	helper(root);
	return root;
};