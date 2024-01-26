function union_two_array(arr1,arr2){
    let combineArray=[...arr1,...arr2]
    let set = new Set()
    let res=[]
    for(let element of combineArray){
        if(!set.has(element)){
            res.push(element)
            set.add(element)
        }
    }
    return res
}
let arr1=[1,2,3,4,5,6,7,8,9]
let arr2=[7,8,9,4,2,1,34,5,87,0]

console.log(union_two_array(arr1,arr2))

//tc= O(n + M)