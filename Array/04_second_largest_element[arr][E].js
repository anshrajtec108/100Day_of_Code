//find the second larget element in arr

// function secondLargestElement(arr){
//     arr.sort((a, b) => a - b);
//     // console.log(arr)
//     for (let i = arr.length-1; i > 0; i--) {
//         if(arr[i]==arr[i-1]){
//             continue;
//         }else{
//             return arr[i-1]
            
//         }
        
//     }
// }


//Better 
// function secondLargestElement(arr){
//     arr.sort((a, b) => a - b);
//     // console.log(arr)
//     let secLargest;
//     for (let i = arr.length-1; i > 0; i--) {
//         if(arr[i] != arr[i-1]){
//             secLargest=arr[i-1]
//             break;
//         }  
//     }
//     return secLargest;
// }
//tc=   O(n log n)


//Optimal
function secondLargestElement(arr){
    let secLargest=-1;
    let largest=0;
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] > largest){
            secLargest=largest
            largest=arr[i]
        }
        else if(arr[i]<largest && arr[i]>secLargest){
            secLargest=arr[i]
        }
    }
    return secLargest;
}
//Tc=O(n)


let arr=[1,3,4,5,69,4,3,6,8,89,3,5,89,89,7]
console.log(secondLargestElement(arr))