/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let startPt = 0;
    let maxLength = 1

    function expandArndCenter(left, right){
    while(left >=0 && right < s.length && s[left]=== s[right]){
        let newMaxLength = right - left +1;
        if(newMaxLength > maxLength){
            maxLength = newMaxLength;
            startPt = left;
        }
        left -=1;
        right +=1;
    }
    }
    for(i=0; i< s.length ; i++){
        expandArndCenter(i-1, i+1);
        expandArndCenter(i, i+1);
    }
    return s.slice(startPt, startPt + maxLength)
}
