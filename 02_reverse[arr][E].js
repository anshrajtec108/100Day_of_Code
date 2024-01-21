// Implement a function to reverse an array.

function reverseArr(arr){
    let res=[]
    for(let i=arr.length-1 ; i>=0; i--){
        res.push(arr[i])
    }
    return res;
}
let arr=[1,3,5,7,90,3,43,67,0,45,23]
console.log(reverseArr(arr))