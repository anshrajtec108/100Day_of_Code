function bubbleSort(arr){
    let n=arr.length
    for (let i=n-1; i >=0;i--) {
        for(let j=0; j < i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([1, 3, 2,7,9,4,6]))