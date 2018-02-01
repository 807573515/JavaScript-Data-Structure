function LinkList () {
    let Node = function (ele) {
        this.value = ele
        this.next = null
    } 
    this.length = 0 // 链表长度
    this.head = null // 链表头结点

    //添加节点
    this.append = function (ele) {
        let newNode = new Node(ele)
        let currentNode
        if(this.head === null){
            this.head = newNode
            
        } else {
            currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
    this.length++
    }

    // 查询指定位置节点
    this.getNode = function (index) {
        if(index > this.length-1){
            return '查询的节点超出链表长度'
            // console.log('查询的节点超出链表长度')
        } else {
            if(index < 0) {
                index += this.length
            }
            let currentNode = this.head
            for(let i = 1;i<=index;i++){
                currentNode = currentNode.next
            }
            return currentNode
        }
       
    }

    // 删除指定位置节点
    this.deleteNode = function (index) {
        if(index > -1 && index < this.length){
            let currentNode = this.head
            let position = 1
            if (index === 0) {
                this.head = this.head.next
            }
            while (position < index) {
                currentNode = currentNode.next
                position++
            }
            currentNode.next = currentNode.next.next || null
            this.length--
        } else {
            return '超出链表范围'
        }
        
    }

    // 在指定位置添加节点
    this.insertNode = function (index,ele) {
        if(index>-1 && index<=this.length){
            let newNode = new Node(ele)
            let currentNode = this.head
            let position = 1
            if (index === 0) {
                newNode.next = this.head
                this.head = newNode
            } else {
                while(position < index){
                    currentNode = currentNode.next
                    position++
                }
                newNode.next = currentNode.next
                currentNode.next = newNode
            }
            this.length++
        }else {
            return '插入位置超出链表'
        }
    }

    // 查询节点在链表中的位置
    this.indexOf = function (ele) {
        let currentNode = this.head
        let index = 0
        while (currentNode) {
            if (currentNode.value === ele) {
                return index
            }
            currentNode = currentNode.next
            index++
        }
        return -1
    }
}

let linklist = new LinkList()
linklist.append(1)
linklist.append(2)
linklist.append(3)

console.log(linklist.indexOf(4))




