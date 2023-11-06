/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
left =0;
right = nums.length-1;
if(nums.length === 1){
	return nums[0]
}
if(nums[left] < nums[right]){
	return nums[left]
}
	
while(left <= right){
const mid = Math.floor((left+right)/2)
const midVal = nums[mid];
const leftVal= nums[left];
const rightVal = nums[right]
const rightOfMid = nums[mid+1]
const leftOfMid = nums[mid-1]

if(leftOfMid > midVal){
	return midVal
} else if(rightOfMid < midVal){
	return rightOfMid
}

if(midVal > leftVal){
	left= mid+1
}else{
	right= mid -1
}

}
}