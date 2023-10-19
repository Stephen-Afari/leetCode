/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	let dpArr = new Array(nums.length).fill(1);
	let maxSoFar = 1
	for(let j=1; j<nums.length; j++){
		for(let i=0; i<j; i++){
			if(nums[j]> nums[i]){
				dpArr[j]= Math.max(dpArr[i]+1 , dpArr[j])
			}
		}
		maxSoFar = Math.max(maxSoFar, dpArr[j])
	}
	return maxSoFar
}