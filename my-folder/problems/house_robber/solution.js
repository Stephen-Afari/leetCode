/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
if(nums.length===0) return 0;
if(nums.length === 1) return nums[0];
if(nums.length === 2) return Math.max(nums[0], nums[1]);
let maxLArr = [nums[0],Math.max(nums[0], nums[1])]
	for (let i=2; i< nums.length; i++){
		maxLArr.push(Math.max(nums[i] + maxLArr[i-2],maxLArr[i-1]))
	}
	return maxLArr.pop()
}