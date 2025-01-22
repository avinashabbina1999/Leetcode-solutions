/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answers = [];
    helper(answers,'(',n-1,n);
    return answers;
};
const helper = (answers,s,m,n) => {
    if(m===0 && n===0){
        answers.push(s);
        return;
    }
    if(m>0){
        helper(answers,s+"(",m-1,n);
    }
    if(n>m){
        helper(answers,s+")",m,n-1);
    }
}