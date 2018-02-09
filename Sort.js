let starttime = new Date()
let arr1 = [9,1,5,8,3,7,4,6,2]
let arr2 = [9,1,5,8,3,7,4,6,2]

function swap (arr, i, j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    return arr
}

//简单交换排序
function swapSort (arr) {
    let count = 0
    let len = arr.length
    for(let i = 0;i<len;i++){
        for(let j = i+1;j<len;j++){
            if(arr[i]>arr[j]){
                swap(arr,i,j)
                
            }
        }
        count++
    }
    console.log(`交换排序执行次数：${count}`)
    return arr
}


// 冒泡排序
function maopaoSort (arr) {
    let count = 0
    let len = arr.length
    for(let i = 0;i<len;i++){
        for(let j = len-1;j>=i;j--){
            if(arr[j]>arr[j+1]){
                swap(arr,j+1,j)
               
            }
        }
        count++
    }
    console.log(`冒泡排序执行次数：${count}`)
    return arr
}

// 冒泡排序改良版
function maopaoSortEX (arr) {
    let flag=true
    let count = 0
    let len = arr.length
    for(let i = 0;i<len && flag;i++){
        flag = false
        for(let j = len-1;j>=i;j--){
            if(arr[j]>arr[j+1]){
                swap(arr,j+1,j)
                flag = true
               
            }
        }
        count++
    }
    console.log(`冒泡排序执行次数：${count}`)
    return arr
}

// 简单选择排序
function simpleSelectionSort (arr) {
    let count = 0
    let len = arr.length
    for(let i = 0;i<len;i++){
        let min = i
        for(let j = i+1;j<len;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        if(min!==i){
            swap(arr,i,min)
        }
    }
    return arr
}

// 插入排序
function insertSort (arr) {
    let len = arr.length
    let temp = []
    temp[0] = arr[0]
    for(let i=1;i<len;i++){
        for(let j = temp.length-1;j>=0;j--){
            if(arr[i]<temp[j]){
                temp[j+1] = temp[j]
            }else {
                temp[j+1] = arr[i] 
                break
            }
        }
    }
    return temp
}

// 快速排序
function quickSort (arr) {
    function qSort (arr,low,high){
        let pivot // 中枢值下标
        if (low<high) {
            pivot = partition(arr,low,high)

            qSort(arr,low,pivot-1)
            qSort(arr,pivot+1,high)
        }
        
        return arr
    }
    function partition (arr,low,high) { // 计算中枢值下标
        let pivotVal = arr[low]
        while (low<high) {
            while(low<high&&pivotVal<=arr[high]){
                high--
            }    
            swap(arr,low,high)
            
            while(low<high&&pivotVal>=arr[low]){
                low++
            } 
            swap(arr,low,high)  
        }
        return low // 返回low或high均可 因为low=high
    }
    return qSort(arr,0,arr.length-1)
}
let result = quickSort([1,3,4,2])
console.log(result)


