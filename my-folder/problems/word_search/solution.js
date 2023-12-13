/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
let found= false;
//loop through the board
for(let row=0; row< board.length; row++){
	for(let col=0; col<board[0].length; col++){
		//if a given cell equals the first xter of the word?
		if(board[row][col] === word[0]){
			dfs(row, col, 0, word)
		}
		}
		}
		
 function dfs(row, col, count, word){
	if(count === word.length){
		found = true;
		return;
	}
//base case
	 if(row <0 || row >= board.length ||
	   col <0 || col > board[0].length ||
	   board[row][col] !== word[count] ||
	   false){
		 return true;
	   }
	 //save in a temp var.
	let temp = board[row][col]
	 //zero it, to avoid visiting the cell again
	 board[row][col]=""
	//go through all the edges of the board in search of all the xters of the word
dfs(row +1, col, count+1, word)
dfs(row -1, col, count+1, word)
dfs(row, col +1, count+1, word)
dfs(row, col-1, count+1, word)
// restore the values
	board[row][col] = temp; 
	 
}
		

	return found;
};