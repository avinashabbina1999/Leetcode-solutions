/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const dfs = (arr,root) => {
        if(!root)
            return
        if(!root.left && !root.right)
            arr.push(root.val)
        dfs(arr,root.left)
        dfs(arr,root.right)
    }

    const arr1 = [],arr2 = []
    dfs(arr1,root1)
    dfs(arr2,root2)
    return JSON.stringify(arr1)===JSON.stringify(arr2)
};