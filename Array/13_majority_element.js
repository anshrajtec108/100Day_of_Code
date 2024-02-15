

function majority_element(arr){
  arr.sort((a,b)=> a - b)
  console.log("arr",arr)
  let res=0

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+1]){
        continue
    }
    let istrue=true
    let j=i
    let count=0
    let max=0
    while(istrue){
    if(arr[j] !== arr[j+1] || j>arr.length-1){
        istrue=false
    }else{
        count++
    }
    j++
    }
    ival=j
    console.log("ival",ival);
    if(count>max){
        
        max=count;
        res=arr[i]
    }
  }
  return res
}
console.log(majority_element([2,2,1,1,1,2,2]));
console.log(majority_element([6,5,5]));
console.log(majority_element([6,6,6,6,6,6,6,6,7,7,6]));// error is coming in this input 