/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int max = 0;
    public int longestZigZag(TreeNode root) {
        path(root,'L',0);
        path(root,'R',0);
        return max;
    }

    public void path(TreeNode root,char dir,int curr){
        if(root==null)
            return;
        max = Math.max(max,curr);
        if(dir=='L'){
            path(root.left,'L',1);
            path(root.right,'R',1+curr);
        }else{
            path(root.left,'L',1+curr);
            path(root.right,'R',1);
        }
    }
}