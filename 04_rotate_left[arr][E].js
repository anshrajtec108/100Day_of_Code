function leftRotate(arr,pos){
    for (let i = 0; i < pos; i++) {
        let temp;
        temp=arr.shift()
        arr.push(temp)        
    }
    return arr;
}
let arr=[1,2,3,4,5,6,7]
console.log(leftRotate(arr,1))