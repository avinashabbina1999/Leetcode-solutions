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
    public int minDepth(TreeNode root) {
        if(root==null)
            return 0;
        return depth(root);
    }
    public int depth(TreeNode root){
        if(root.left!=null || root.right!=null){
            if(root.left!=null && root.right!=null)
                return 1+Math.min(depth(root.left),depth(root.right));
            else if(root.left!=null)
                return 1+depth(root.left);
            else if(root.right!=null)
                return 1+depth(root.right);
        }
        return 1;
    }
}