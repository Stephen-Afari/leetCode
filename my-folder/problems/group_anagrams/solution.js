/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(str) {
 let myhash = {};
    for(let i=0; i<str.length; i++){
        let word = str[i];
        let sortWord = word.split('').sort().join('');
        if(!myhash[sortWord]){
             myhash[sortWord] = []
        }
        myhash[sortWord].push(word)
    }

    return Object.values(myhash)
    
}