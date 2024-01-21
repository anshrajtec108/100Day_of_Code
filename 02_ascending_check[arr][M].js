function ascendingCheck(arr){
    let temp=[]
    let isAcs=false
    for (let k = 0; k< arr.length; k++) {   
           temp.push(arr[k])
   
    }
   temp.sort()
   console.log(temp)

    for(let i=0; i<=arr.length-1;i++){
        if(arr[i]===temp[i]){
            isAcs=true
            continue;
        }else{
            isAcs=true
            break;
        }
    }  
    if(isAcs){
        console.log("The array is in ascending order.");
    }else{
        console.log("The array is not in ascending order.");
    }
} 

let arr=[1,2,3,4,5,66,7,8]
ascendingCheck(arr)