/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let myHashMap = {'(':')', '{':'}', '[':']'};
    let stack = [];
//loop tru each xter in the string
    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(myHashMap[char]){
            stack.push(char)
            
        } else if (myHashMap[stack.pop()] !== char){
            return false;
            
        }
    }
   return stack.length === 0;
}