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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []

    const queue = [root]
    const ans = []

    while(queue.length>0){
        let len = queue.length
        for(let i=0;i<len-1;i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        let temp = queue.shift()
        ans.push(temp.val)
        if(temp.left) queue.push(temp.left)
        if(temp.right) queue.push(temp.right)
    }
    return ans

};