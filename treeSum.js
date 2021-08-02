const tree = [
    {
        v: 5,
        c: {
            v: 3
        }
    },
    {
        v: 2,
        v: 3,
        c: {
            v: 6,
            c: {
                v: 2
            }
        }
    }
]
function treeSum(tree){
    if(!tree.length){
        return  0;
    }
    var sum = 0;
    var stack = [];
    tree.forEach(element => {
        stack.push(element)
    });
    for(let i = 0; i < tree.length; i++){
        let node = tree.pop()
        sum += node.v
        let sumCC = node.c
        if(sumCC){
            node.c.forEach(node => stack.push(node))
        }
    }
    return sum;
}
console.log(treeSum(tree))