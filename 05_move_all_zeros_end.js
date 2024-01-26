// //Move zeros to End:

// // better but hardest way and I not using any array methods like(push, pop)

// function move_all_zerosToEnd(arr){
//     for (let i = 0; i < arr.length; i++) {
//      if(arr[i] !== 0){
//         continue;
//      }else{
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[j]==0){
//                 continue;
//             }else{
//                 temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
            
//         }
//      }
        
//     }
//     return arr;
// }
// //O(n^2)


// //optimal and easiest way 
function move_all_zerosToEnd(arr){
    let tempArr=[]
    let tempZero=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===0){
            tempZero.push(arr[i])
        }else{
            tempArr.push(arr[i])
        }
        
    }
    return [...tempArr, ...tempZero];
}
// // O(n)


let arr=[1,2,34,5,6,7,0,5,3,0,4,0,345,]
console.log(move_all_zerosToEnd(arr))