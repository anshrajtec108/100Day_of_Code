//Method 1
// function sum_First_N_Natural_no(n){
//     let sum=0
//     for (let i = 1; i <=n; i++) {
//      sum=sum+i
//     }
//     return sum;
// }


//Method 2
function sum_First_N_Natural_no(n){

    let sum=n*(n+1)/2
    return sum
}

console.log(sum_First_N_Natural_no(10))