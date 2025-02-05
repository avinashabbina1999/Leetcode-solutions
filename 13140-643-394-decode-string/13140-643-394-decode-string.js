/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let num = 0,curr = '',stack = []

    for(let c of s){
        if(!isNaN(c) && c !== ' ')
            num = num*10 + Number(c)
        else if(c === '['){
            stack.push(num)
            stack.push(curr)
            num = 0
            curr = ''
        }else if(c === ']'){
            let pcurr = stack.pop()
            let pnum = stack.pop()
            curr = pcurr + curr.repeat(pnum)
        }else
            curr+=c
    }
    return curr
};