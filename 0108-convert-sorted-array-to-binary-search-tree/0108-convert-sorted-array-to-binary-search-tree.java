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
    public TreeNode sortedArrayToBST(int[] nums) {
        return getTree(nums,0,nums.length-1);
    }
    public TreeNode getTree(int[] nums,int start,int end) {
        if(start>end)
            return null;
        int mid = (start+end)/2;
        TreeNode root = new TreeNode();
        root.val = nums[mid];
        root.left = getTree(nums,start,mid-1);
        root.right = getTree(nums,mid+1,end);
        return root;
    }
}