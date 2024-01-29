// check whether a number is positive or negative

function check_positive_negative(num){
    if(num===0){
        return "it is zero not positive or negative number "
    }
    if(num>0){
        return "it the positive number"
    }else{
        return "it is negative number"
    }
}
console.log(check_positive_negative(-677676))