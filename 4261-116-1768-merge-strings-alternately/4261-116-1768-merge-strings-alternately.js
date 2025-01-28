/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = '';
    for(let i=0;i<Math.min(word1.length,word2.length);i++){
        ans = ans + word1[i];
        ans = ans + word2[i];
    }
    if(word1.length<word2.length)
        ans = ans.concat(word2.slice(word1.length));
    else if(word1.length>word2.length)
        ans = ans.concat(word1.slice(word2.length));
    return ans;
};