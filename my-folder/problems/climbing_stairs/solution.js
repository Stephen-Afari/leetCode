/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	if(n<=3) return n;
	let ways = [0,1,2,3]
for(let i=4; i<=n; i++){
	ways.push(ways[i-2]+ ways[i-1])
}
	return ways[n]
}