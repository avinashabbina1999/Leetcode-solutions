/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    return s.split(' ').filter(Boolean).reverse().join(' ');


    //return s.split(' ').filter(w => w).reverse().join(' ');


    // let ans = [],i = 0;

    // while(i<s.length){
    //     while(i< s.length && s[i] === ' ') i++;
    //     let str = '';
    //     while(i< s.length && s[i] !== ' '){
    //         str+= s[i];
    //         i++;
    //     }
    //     if(str) ans.push(str);
    // }
    // ans.reverse();
    // return ans.join(' ');
};