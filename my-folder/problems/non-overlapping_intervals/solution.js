/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
//check for constraints
	if(intervals.length ===0) return 0;
	
	let count=0;
//sort the interval subarrays, by their first elements
intervals.sort((a,b)=>a[0] - b[0])
let end = intervals[0][1];
	
for (let i=1; i<intervals.length; i++){
	let interval= intervals[i];
	let intervalStart = interval[0];
	let intervalEnd = interval[1]
if(intervalStart < end){
	count++;
//reset the end to be the interval with the lowest end
end = Math.min(end, intervalEnd)
}else{
	end = intervalEnd
}
}
	return count;
};