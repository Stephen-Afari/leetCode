/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 	let maxProfit=0;
	let cheapestPrice= prices[0]

for(let i=0; i<prices.length; i++){
	let currPrice= prices[i]
if(currPrice < cheapestPrice){
	cheapestPrice= currPrice
}
let currProfit = currPrice - cheapestPrice;
	maxProfit = Math.max(currProfit, maxProfit)
}
	return maxProfit;
}