function  find_intersection_element(arr1,arr2){
    let res=[];
    for(let i=0; i<=arr1.length-1; i++){
        let istrue=false
        for(let j=0; j<=arr2.length-1; j++){
            if(arr1[i]===arr2[j]){
                istrue=true;
                break;
            }else{
                continue;
            }
        }
        if(istrue){
            res.push(arr1[i])
        }
    }
    return res;
}
let arr1=[3,4,1,2,3,3,3,4,5,5]
let arr2=[8,7,3,4,3,3,3,5,5,5,5,5,5,5]
console.log(find_intersection_element(arr1,arr2))