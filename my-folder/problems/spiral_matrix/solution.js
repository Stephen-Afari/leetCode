/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
let spiralArr = []
//check if the matrix is empty
if(matrix.length === 0) {return spiralArr};
//set up dimensions

let top =0;
let bottom = matrix.length -1;
let left=0;
let right= matrix[0].length -1;
let dir = "right"
while(left <= right && top <= bottom){
if(dir ==='right'){
for (let i=left; i<=right; i++){
	spiralArr.push(matrix[top][i])
}
//move one step down
	top++
	dir="down"
}else if(dir === "down"){
for(let i= top; i<=bottom; i++){
	spiralArr.push(matrix[i][right])
}
right--;
dir="left"

}else if(dir === "left"){
for(let i=right; i>=left; i--){
	spiralArr.push(matrix[bottom][i])
}
bottom--;
dir="up"
}else if(dir==="up"){
for (let i=bottom; i>= top;  i--){
	spiralArr.push(matrix[i][left])
}
	left++;
	dir="right"
}

}
	return spiralArr;
    
};