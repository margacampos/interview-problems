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

const firstTree = new BinaryTree();
firstTree.insert(23);
firstTree.insert(25);

firstTree.insert(12);
firstTree.insert(2);
firstTree.insert(48);
firstTree.insert(14);
console.log(firstTree);

const treeSum = ( root ) => {
    if(!root)return 0;
    let left = treeSum(root.left);
    let right = treeSum(root.right);
    return root.data + left + right;
}

console.log(treeSum(firstTree.root));