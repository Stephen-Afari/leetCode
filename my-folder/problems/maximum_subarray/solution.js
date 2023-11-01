/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
 let max = nums[0]
for (let i=1; i<nums.length; i++){
	let num= nums[i];
//Maximum up to the current index
nums[i]= Math.max(num, num+ nums[i-1])
max = Math.max(max, nums[i])
}
	return max;
}