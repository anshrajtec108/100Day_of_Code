//Create a program to find the second smallest element in an array.
//better
// function secoundSmallest(arr){
//     arr.sort()
//     for(let i=0; i<=arr.length-1; i++ ){
//         if(arr[i]===arr[i+1]){
//             continue;
         
//         }
//         else{
//             return res=arr[i+1]
//         }
//     }
// }


//optimal 

function secoundSmallest(arr){
    let smallest=arr[0];
    let secsmallest;
    for (let i = 1; i < arr.length-1; i++) {
       if(arr[i]<smallest){
        secsmallest=smallest;
        smallest=arr[i]
       }
       else if(arr[i] != smallest && arr[i]< secsmallest){
        secsmallest=arr[i]
       }

        
    }
    return secsmallest
}
//Tc=O(n)

let arr=[31,41,1,31,23,3332,423,53,236,7,7,7,7]
console.log(secoundSmallest(arr))