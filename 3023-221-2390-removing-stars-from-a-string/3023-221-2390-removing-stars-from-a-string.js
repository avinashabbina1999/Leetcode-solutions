/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = []

    for(let i=0;i<s.length;i++){
        if(s[i]==='*')
            stack.pop()
        else
            stack.push(s[i])
    }
    // for(let c of s){
    //     if(c==='*' && stack.length>0)
    //         stack.pop()
    //     else
    //         stack.push(c)
    // }
    return stack.join('')
};