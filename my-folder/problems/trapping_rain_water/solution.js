/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
//declare variables
let left=0; right= height.length -1; maxLeft=0; maxRight=0; totalWater=0;
while(left < right){
//check if the value at the left is lower than the right
	if(height[left] < height[right]){
		if(maxLeft <= height[left]){
			maxLeft = height[left]
		} else {
			totalWater += maxLeft - height[left]
		}
		left++;
	}else{
		if(maxRight <= height[right]){
			maxRight = height[right]
		} else{
			totalWater += maxRight - height[right]
		}
		right--;
	}
}
    return totalWater;
};