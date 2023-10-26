/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
let start= 0;
	let end = height.length -1;
	let myArea = 0;
while(start < end){
//The lower vertical height determines the height (to avoid spillage)
	let curArea = Math.min(height[start], height[end])*(end - start);
	myArea = Math.max(curArea,myArea)
if(height[start] < height[end]){
	start++
} else{
	end--
}
}
	return myArea
	

}