/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const arr1 = Array(26).fill(0), arr2 = Array(26).fill(0)

    for(let i=0;i<word1.length;i++)
        arr1[word1.charCodeAt(i)-'a'.charCodeAt(0)]++
    for(let i=0;i<word2.length;i++)
        arr2[word2.charCodeAt(i)-'a'.charCodeAt(0)]++

    for(let i=0;i<26;i++)
        if((arr1[i]===0 && arr2[i]!==0) || (arr1[i]!==0 && arr2[i]===0))
            return false

    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)

    for(let i=0;i<26;i++)
        if(arr1[i]!==arr2[i])
            return false
    return true
};