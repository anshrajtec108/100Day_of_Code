// Write a program to find the largest element in an array.

 function largestElement(arr){
    arr.sort()
     let res=arr[(arr.length-1)];
    return res;
}
let arr=[1,3,4,5,69,4,3,6,8,89,3,5,7]
console.log(largestElement(arr))