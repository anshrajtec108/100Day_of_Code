function find_the_missing(arr,n){
    let temp=[]
    let res=[]
    for(let i=1; i<=n; i++){
        temp.push(i)
    }
    for(let j=0; j<=temp.length-1;j++){
        let istrue=true;
        for(let k=0; k<=arr.length-1;k++){
            if(temp[j]===arr[k]){
                istrue=true
                console.log("1")
                continue;
            }else{
                istrue=false
            }
        }
        if(istrue){
            res.push(temp[j])
        }else{
            continue;
        }
    }
    return res
}
let arr=[1, 2, 4, 6, 3, 7, 8]
console.log(find_the_missing(arr,8))

//error