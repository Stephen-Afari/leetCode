/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let count =0;
//count the Islands
for(let row=0 ; row < grid.length; row++){
	for(let col=0; col<grid[0].length; col++){
		if(grid[row][col]==="1"){
			count++
			dfs(grid, row, col)
		}
	}
}
//recursive function
	function dfs(grid,row,col){
//base case	
		if(row <0 ||
		  row >= grid.length ||
		  col < 0 ||
		  col>= grid[0].length ||
		  grid[row][col]==='0'){
			return;
		  }
		grid[row][col] = '0';
		dfs(grid,row+1,col)
		dfs(grid,row-1,col)
		dfs(grid,row,col+1)
		dfs(grid,row,col-1)
	}
return count;
    
};