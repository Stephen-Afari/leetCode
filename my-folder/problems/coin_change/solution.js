/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
const dpArr = new Array(amount +1).fill(Infinity);
	dpArr[0] = 0;

for(let j=0; j< dpArr.length; j++){
	for(let i=0; i< coins.length; i++){
		let coinVal = coins[i];
		if(coinVal <= j){
			dpArr[j]= Math.min(dpArr[j - coins[i]]+1, dpArr[j] )
		}
	}
}
	const answer = dpArr[dpArr.length-1]
	return answer === Infinity ? -1: answer
}