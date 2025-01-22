/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    return ways(s);
};

const ways = (s,memo={}) => {
    if(s in memo) return memo[s];
    if(s==='') return 1;
    if(s[0]==='') return 0;

    let total = 0;
    if(parseInt(s.slice(0,1))>=1 && parseInt(s.slice(0,1))<=9)
        total+= ways(s.slice(1),memo);
    if(s.length>=2 && parseInt(s.slice(0,2))>=10 && parseInt(s.slice(0,2))<=26)
        total+= ways(s.slice(2),memo);
    return memo[s] = total;
};