/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    const gcd = (len1,len2) => len2 === 0 ? len1 : gcd(len2,len1%len2)
    
    if(str1+str2 !== str2+str1) return ''

    return str1.slice(0,gcd(str1.length,str2.length))
};

