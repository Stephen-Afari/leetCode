/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dpMat = [];
	//fill all spaces with an array
   for (let i= 0; i< m; i++){
         dpMat.push([])
   }
//fill first row
for(let j=0; j<m ; j++){
   dpMat[j][0] = 1
}
//fill first colums
for(let k=0; k< n; k++){
dpMat[0][k] =1;
}
//fill second to last rows
for(let i=1; i<m; i++){
   for(let j=1; j<n ; j++){
      dpMat[i][j] = dpMat[i-1][j]+ dpMat[i][j-1]
   }

}
   return dpMat[m-1][n-1]
}
