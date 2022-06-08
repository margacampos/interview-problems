class BiNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null; 
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insertNode(root, node) {
        if( Number(node.data) < Number(root.data) ){
            if( root.left === null )root.left = node;
            else this.insertNode(root.left, node);
        }else{
            if( root.right === null )root.right = node;
            else this.insertNode(root.right, node);
        }
    }
    insert(data) {
        const newNode = new BiNode(data);
        if(this.root === null) this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        };
    }
};
class BinaryTreeSym {
    constructor() {
        this.root = null;
    }
    insertNode(root, node) {
        if( Number(node.data) < Number(root.data) ){
            if( root.right === null )root.right = node;
            else this.insertNode(root.right, node);
        }else{
            if( root.left === null )root.left = node;
            else this.insertNode(root.left, node);
        }
    }
    insert(data) {
        const newNode = new BiNode(data);
        if(this.root === null) this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        };
    }
};

const firstTree = new BinaryTree();
const secondTree = new BinaryTreeSym();

firstTree.insert(23);
firstTree.insert(25);
firstTree.insert(12);
firstTree.insert(2);
firstTree.insert(48);
firstTree.insert(14);
secondTree.insert(23);
secondTree.insert(25);
secondTree.insert(12);
secondTree.insert(2);
secondTree.insert(48);
secondTree.insert(14);

console.log(firstTree);

const treeSum = ( root ) => {
    if(!root)return 0;
    let left = treeSum(root.left);
    let right = treeSum(root.right);
    return root.data + left + right;
}

console.log(treeSum(firstTree.root));

const isSymmetric = ( root1, root2 ) => {
    if(!root1 && root2)return false;
    if(root1 && !root2)return false;
    if(!root1 && !root2)return true;
    if(Number(root1.data)!==Number(root2.data))return false;;

    return (isSymmetric(root1.left, root2.right) && isSymmetric(root1.right, root2.left));

};

console.log(isSymmetric(firstTree.root, secondTree.root));