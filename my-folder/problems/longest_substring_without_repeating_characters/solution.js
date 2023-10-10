/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let windowCharMap = {};
let winStart =0;
let maxLength =0;

for (let i=0; i<s.length; i++){
    let endChar = s[i];
if(windowCharMap[endChar] >= winStart){
    winStart = windowCharMap[endChar] +1
}
    windowCharMap[endChar] = i;
    maxLength = Math.max(maxLength, i - winStart +1 )
}
    return maxLength;
}