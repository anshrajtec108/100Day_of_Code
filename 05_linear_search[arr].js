// // linear search

function linear_search(arr,num){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==num){
            return i
        }
        
    }
    return -1
}
let arr=[1,2,3,5,68,9,0,5,37,95]
console.log(linear_search(arr,2))