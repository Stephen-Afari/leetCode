/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if(!intervals.length) return intervals
//sort the intervals by their first elements
intervals.sort((a,b)=> a[0] - b[0])
let res = [intervals[0]]
for(let i=0; i < intervals.length; i++){
	let currentInterval = intervals[i];
	let lastInterval = res[res.length-1]
if(currentInterval[0]<= lastInterval[1]){
	lastInterval[1]= Math.max(lastInterval[1], currentInterval[1])
} else{
	res.push(currentInterval)
}
}
	return res;
    
};