# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root==None:
            return True
        return self.check(root.left,root.right)
    def check(self,p,q):
        if p==None or q==None:
            if p==None and q==None:
                return True
            else:
                return False
        return p.val==q.val and self.check(p.left,q.right) and self.check(p.right,q.left)