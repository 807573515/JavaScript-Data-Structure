const tree = {
    val:'A',
    lchild: {
        val:'B',
        lchild:{
            val:'D',
            lchild:null,
            rchild:null
        },
        rchild: {
            val:'E',
            lchild:null,
            rchild:null
        }
    },
    rchild: {
        val:'C',
        lchild:{
            val:'F',
            lchild:null,
            rchild:null
        },
        rchild:{
            val:'G',
            lchild:null,
            rchild:null
        }
    }
}

function TraversalTree (node) {
    if(node !== null){
        console.log(node.val)
        TraversalTree(node.lchild)
        TraversalTree(node.rchild)
    }
    
}
TraversalTree(tree)