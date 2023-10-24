/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 	let myObj= {};
for(let i=0; i< nums.length; i++){
	let curVal = nums[i];
	if(myObj[curVal]){
		return true
	} else{
		myObj[curVal]= true;
	}
}
	return false
}