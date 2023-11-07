/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
 const minIdx= findMinIdx(nums);
let left= binarySearch(nums,target, 0, minIdx -1);
let right = binarySearch(nums, target, minIdx, nums.length -1)
	return Math.max(left, right)
}
const binarySearch = (nums,target, left, right)=>{
	while(left <=right){
	let mid = Math.floor((left + right)/2)
if(nums[mid]=== target){
	return mid;
} else if(nums[mid] > target){
	right = mid - 1;
} else {
	left = mid + 1;
}
	}
	return -1
}

const findMinIdx = (rotSortedArr)=>{
	let left=0;
	let right = rotSortedArr.length -1
if(rotSortedArr.length === 1){
	return 0
}
if(rotSortedArr[left]<rotSortedArr[right]){
	return 0
}
	while(left <= right){
		let mid = Math.floor((left+ right)/2);
if(rotSortedArr[mid]< rotSortedArr[mid-1]){
	return mid
} else if (rotSortedArr[mid] > rotSortedArr[mid+1]){
		return mid+1
	}
if(rotSortedArr[left]> rotSortedArr[mid]){
	right = mid - 1
} else{
	left = mid + 1
}
	
}
}
