//Implement an algorithm to rotate an array to the right by a given number of steps.
function rotateArr(arr,pos){
    
    for(let i=0; i<pos; i++){
        let temp;
        temp=arr.pop()
        // arr.pop()
        arr.unshift(temp)
    }
    return arr;
}
let arr=[1,2,3,4]

console.log(rotateArr(arr,1))