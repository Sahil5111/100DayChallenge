class node:
    def __init__(self, data):
        self.data = data
        self.left=None
        self.right=None  

def traversal(self):
    if self is None:
        return 
    traversal(self.left)
    print(self.data)
    traversal(self.right)

def height(root):
    if root is None:
        return 0
    a=height(root.left)
    b=height(root.right)
    return max(a,b)+1

def insert(root,data):
    if root is None:
        return node(data)
    elif root.data == data:
        return None
    elif root.data<data:
        root.right=insert(root.right,data)
    else :
        root.left=insert(root.left,data)
    return root

a=node(10)
a=insert(a,2)
a=insert(a,31)
a=insert(a,1)
a=insert(a,8)
a=insert(a,14)
a=insert(a,56)
a=insert(a,24)
a=insert(a,40)
a=insert(a,71)
a=insert(a,93)
print(height(a))