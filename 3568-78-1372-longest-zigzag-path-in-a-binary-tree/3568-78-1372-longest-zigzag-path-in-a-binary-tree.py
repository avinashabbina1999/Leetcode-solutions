# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        def dfs(root,dir,curr):
            if not root:
                return curr
            left,right = 0,0
            if dir=='L':
                left = dfs(root.left,'L',1)
                right = dfs(root.right,'R',1+curr)
            else:
                left = dfs(root.left,'L',1+curr)
                right = dfs(root.right,'R',1)
            return max(left,right)
        return max(dfs(root,'L',0),dfs(root,'R',0))-1