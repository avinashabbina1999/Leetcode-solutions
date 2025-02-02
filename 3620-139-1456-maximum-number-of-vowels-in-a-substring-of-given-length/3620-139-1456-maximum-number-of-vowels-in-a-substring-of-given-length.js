/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = 'aeiou'
    let substr = s.slice(0,k)
    let count = 0,maxCount = 0
    for(let char of [...substr]){
        if(vowels.includes(char)){
            count++
            maxCount++
        }
    }
    for(let i=k;i<s.length;i++){
        if(vowels.includes(s[i]) && !vowels.includes(s[i-k])){
            count++
        }else if(!vowels.includes(s[i]) && vowels.includes(s[i-k])){
            count--
        }
        maxCount = Math.max(count,maxCount)
    }
    return maxCount
};