/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
 let outputArr = nums.map(n=> 1);
let product=1;
//multiply from left
for (let i=0; i< nums.length ; i++){
outputArr[i]= outputArr[i] * product;
product = product * nums[i]

}
product=1;
//from right
for(let j=nums.length -1; j>=0; j--){
outputArr[j]= outputArr[j]*product;
	product = product*nums[j];
}
	return outputArr;
}