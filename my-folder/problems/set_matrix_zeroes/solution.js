/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	let firstRowHasZero = false;
	let firstColHasZero = false;

//check if there's a zero in the first col
for(let i=0; i<matrix.length; i++){
	if(matrix[i][0]===0){
		firstColHasZero = true;
			break;
	}

}
	
//check if there's a zero in the first row
for(let i=0; i< matrix[0].length; i++){
	if(matrix[0][i] ===0){
	firstRowHasZero = true;
		break;
	}
	
}

//check if the rest has zero and use the first row or col as a flag
for(let row =1; row< matrix.length; row++){
	for(let col=1; col< matrix[0].length; col++){
		if(matrix[row][col]=== 0){
			matrix[0][col]=0;
			matrix[row][0]=0;
		}
	}
}
//fill out the all the rows and cols based on the flag
for(let row =1; row< matrix.length; row++){
	for(let col=1; col<matrix[0].length; col++){
		if(matrix[row][0]===0 || matrix[0][col]===0){
			matrix[row][col]=0
		}
	}
}


//set all items in the col to zero if there's a zero in first col

if(firstColHasZero){
for(let i=0; i<matrix.length; i++){
	matrix[i][0]=0
}
}

//set all items in the row to zero if first row is zero

if(firstRowHasZero){
for(let i=0; i<matrix[0].length; i++){
	matrix[0][i]=0
}
	
}

return matrix;
}