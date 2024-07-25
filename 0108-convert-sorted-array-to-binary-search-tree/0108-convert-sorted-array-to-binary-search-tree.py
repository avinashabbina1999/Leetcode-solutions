# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        return self.getTree(nums,0,len(nums)-1)
    def getTree(self,nums,start,end):
        if start > end:
            return None
        mid = (start+end)//2
        root = TreeNode()
        root.val = nums[mid]
        root.left = self.getTree(nums,start,mid-1)
        root.right = self.getTree(nums,mid+1,end)
        return root
        