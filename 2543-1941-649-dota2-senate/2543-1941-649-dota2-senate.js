/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const R = [],D = []

    for(let i=0;i<senate.length;i++){
        if(senate[i]==='R')
            R.push(i)
        else
            D.push(i)
    }

    while(R.length>0 && D.length>0){
        let r = R.shift(),d = D.shift()
        if(r<d)
            R.push(senate.length+r)
        else
            D.push(senate.length+d)
    }
    if(R.length===0)
        return 'Dire'
    return 'Radiant'
};