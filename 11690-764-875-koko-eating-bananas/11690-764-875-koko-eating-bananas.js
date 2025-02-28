/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const getHours = mid =>{
        let ans=0
        piles.forEach(pile=>{
            ans+=Math.ceil(pile/mid)
        })
        return ans
    }
    let start=1,end=Math.max(...piles)
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(getHours(mid)>h) start=mid+1
        else end = mid-1
    }
    return start
};

