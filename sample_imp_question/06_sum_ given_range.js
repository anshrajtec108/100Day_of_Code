function sum_given_range(start,end){
    let sum=0;
    for (let i = start; i <=end; i++) {
        sum=sum+i
    }
    return sum;
}
console.log(sum_given_range(2,4))