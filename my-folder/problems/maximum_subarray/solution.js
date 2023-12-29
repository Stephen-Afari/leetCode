/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
 let max = nums[0]
 let dpMax = [nums[0]]
for (let i=1; i<nums.length; i++){
	let num= nums[i];
//Maximum up to the current index
dpMax[i]= Math.max(num, num+ dpMax[i-1])
max = Math.max(max, dpMax[i])
}
	return max;
}