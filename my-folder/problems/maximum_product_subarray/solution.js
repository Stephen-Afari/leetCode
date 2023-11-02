/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
 let maxTillIndex = [nums[0]];
	let minTillIndex = [nums[0]];
	let max = nums[0]
for(let i=1; i< nums.length; i++){
	let num = nums[i];
maxTillIndex[i]= Math.max(num, num*maxTillIndex[i-1], num*minTillIndex[i-1])
minTillIndex[i]= Math.min(num, num*maxTillIndex[i-1], num*minTillIndex[i-1])
max = Math.max(max, maxTillIndex[i])

}
	return max
}