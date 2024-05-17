

function findSumTarget(Array, Target) {
    let res;
    let istrue=true
    for (let i = 0; i <= Array.length; i++) {
        if (istrue){
           for (let j = 0; j <= Array.length; j++) {
            if ((Array[i] + Array[j]) == Target) {
                res = `index ${i} and ${j}(${Array[i]} +${Array[j]})`
                istrue=false
                break;
            }
           }  
       }
        else {
            break;
        }
    }
    if (res.length == 0) {
        return "‘the sum to target is not define``"
    }
    else {
        return res
    }
}


let Array = [10, 20, 30, 40]
let Target = 50

console.log(findSumTarget(Array, Target))