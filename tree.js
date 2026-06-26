class TreeNode{
    constructor(data){
        this.data = data, 
        this.children = [];
    }

    addChild(childNode){
        this.children.push(childNode);
    }

    printTree(node, depth = 0){
        console.log(" ".repeat(depth*4) + `-> ${node.data}`)
        // console.log(" ".repeat(depth * 4) + `-> ${node.data}`);
    
        node.children.forEach(child => this.printTree(child, depth + 1))
        
    }
} 

const root = new TreeNode("Root");
const docs = new TreeNode('Documents');
const pictures = new TreeNode('Pictures');
const resume = new TreeNode('Resume.pdf')

root.addChild(docs);
root.addChild(pictures);

docs.addChild(resume);

root.printTree(root)
