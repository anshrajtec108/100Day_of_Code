let res=[]
function main(arr){
    if(arr.length <=1){
        return arr
    }
    return reverse_Arr(arr.length-1,arr)
}
function reverse_Arr(i,arr){
    if(i<0){
        return res
    } 
    res.push(arr[i])
    return reverse_Arr(i-1,arr)
}

let arr=[1,2,3,4,5,6]
console.log(main(arr));
