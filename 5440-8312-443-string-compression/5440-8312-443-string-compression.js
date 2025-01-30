/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0 //,ans = []

    for(let i=0;i<chars.length;){
        let count = 0,ch = chars[i]

        while(i<chars.length && chars[i]===ch){
            count++;
            i++;
        }

        chars[index] = ch
        //ans[index] = ch
        index++;

        if(count>1){
            temp = count.toString().split('')
            for(let t of temp){
                chars[index] = t
                // ans[index] = t
                index++
            }
        }
    }
    // chars.length = 0
    // chars.push(...ans)
    return index;
};