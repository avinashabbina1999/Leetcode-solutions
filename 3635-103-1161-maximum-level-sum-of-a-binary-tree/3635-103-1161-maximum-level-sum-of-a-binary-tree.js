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
var maxLevelSum = function(root) {
    let count = 0,maxSum = root.val-1,ans = 0
    queue = [root]

    while(queue.length>0){
        count++
        let len = queue.length,sum = 0
        for(let i=0;i<len;i++){
            node = queue.shift()
            sum+= node.val
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        if(sum>maxSum){
            ans = count
            maxSum = sum
        }
    }
    return ans
};