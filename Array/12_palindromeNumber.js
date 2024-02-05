const ispalindrome=(x)=>{
    
    // let temp=x.toString().split("").reverse().join("")
    // if(x==temp){
    //     return("it is palindrome number ")
    // }
    // else{
    //     return("it is not palindrome number ")
    // }
    return x<0 ? false: x===+x.toString().split("").reverse().join("")
}
console.log(ispalindrome(121))