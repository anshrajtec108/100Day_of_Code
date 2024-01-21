//Create a program to find the second smallest element in an array.

function secoundSmallest(arr){
    arr.sort()
    for(let i=0; i<=arr.length-1; i++ ){
        if(arr[i]===arr[i+1]){
            continue;
         
        }
        else{
            return res=arr[i+1]
        }
    }
}
let arr=[31,41,1,31,23,3332,423,53,236,7,7,7,7]
console.log(secoundSmallest(arr))