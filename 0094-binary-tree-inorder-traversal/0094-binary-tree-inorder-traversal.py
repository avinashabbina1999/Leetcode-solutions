# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    in_order = []
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        self.in_order = []
        self.inorder(root)
        return self.in_order
    def inorder(self,root):
        if root==None:
            return
        self.inorder(root.left)
        self.in_order.append(root.val)
        self.inorder(root.right)