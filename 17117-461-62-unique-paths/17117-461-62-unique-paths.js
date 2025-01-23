/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return paths(m-1,n-1);
};

const paths = (m,n,memo = {}) => {
    const key1 = m + ',' + n;
    const key2 = n + ',' + m;
    if(key1 in memo) return memo[key1];
    if(key2 in memo) return memo[key2];
    if(m===0 && n===0) return 1;
    if(m===-1 || n===-1) return 0;

    memo[key1] = paths(m-1,n,memo)+paths(m,n-1,memo);
    return memo[key2] = memo[key1];
};