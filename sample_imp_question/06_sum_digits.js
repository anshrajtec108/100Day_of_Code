
// method 1
function sumDigits(digits){
    let sum=0;
    for (let i = 0; i <digits.length; i++) {
        sum=sum+Number(digits[i])
    }
    return sum;
}
let digits="231456"
console.log(sumDigits(digits))


// // method 2 the ouput is 23.3333.. but the ans=21 but in C language working good
// function sumDigits(digits){
//     let sum=0;
//     while(digits !==0){
//         sum=sum + digits % 10;
//         digits=digits / 10;
//     }
//     return sum
// }
// console.log(sumDigits(231456))
