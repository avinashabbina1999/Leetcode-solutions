/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    while(i<flowerbed.length && n>0){
        let left = false;
        let right = false;

        if((i===0 || flowerbed[i-1]===0) && flowerbed[i]===0)
            left = true;
        if((i===flowerbed.length-1 || flowerbed[i+1]===0) && flowerbed[i]===0)
            right = true;
        
        if(left && right) {
            flowerbed[i] = 1;
            n--;
        }
        i++;
    }
    return n===0;
};