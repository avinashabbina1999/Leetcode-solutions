/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0,j = height.length-1,maxArea = - 1
    while(i<j){
        let area = (j-i)*Math.min(height[i],height[j])
        maxArea = Math.max(area,maxArea)

        if(height[i]<=height[j])
            i++
        else
            j--
    }
    return maxArea
};