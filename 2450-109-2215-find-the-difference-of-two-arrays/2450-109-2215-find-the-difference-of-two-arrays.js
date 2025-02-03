/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)


    return [[...set1].filter(num => !set2.has(num)),
    [...set2].filter(num => !set1.has(num))]

    
    // const map1 = {}, map2 = {}

    // for(let num of nums1)
    //     map1[num] = (map1[num] || 0) + 1
    // for(let num of nums2)
    //     map2[num] = (map2[num] || 0) + 1

    // const arr1 = [], arr2 = []

    // Object.keys(map1).forEach((key) => {
    //     if(!(key in map2))
    //         arr1.push(Number(key))
    // })
    // Object.keys(map2).forEach((key) => {
    //     if(!(key in map1))
    //         arr2.push(Number(key))
    // })
    // return [arr1,arr2]
};