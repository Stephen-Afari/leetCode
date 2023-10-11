/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 let charMap = {};
    //should have the same length
    if(s.length !== t.length){
        return false;
    }
  //loop tru s and put into a hashmap
    for(let i=0; i< s.length; i++){
        let schar = s[i];
        //if it exists, assign add 1 to the value or 1 if it does not exist
        charMap[schar] = charMap[schar] + 1 || 1;
    }
    //loop tru t and check if it's inside s
    for (let i=0; i<t.length; i++){
        let tchar = t[i]
        //if falsy, return false
            if(!charMap[tchar]){
           return false;
        }else {
                
                charMap[tchar]--
        } 
    }
    return true;
}