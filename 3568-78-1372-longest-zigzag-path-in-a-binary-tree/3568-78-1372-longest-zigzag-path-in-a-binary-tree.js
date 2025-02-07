/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let max = 0

    const helper = (root,dir,curr=0) => {
        if(!root)
            return
        max = Math.max(max,curr)
        if(dir === 'R'){
            helper(root.left,'L',1+curr)
            helper(root.right,'R',1)
        }else{
            helper(root.left,'L',1)
            helper(root.right,'R',1+curr)
        }
    }
    helper(root,'L')
    helper(root,'R')
    return max
};