/* Write a program that takes two strings and copies smaller string into bigger string*/

function CopiesSmallerToLarger(str1,str2){
    let res=''
    if(str1.length==str2.length){
        return res="the both string is equal"
    }
    if(str1.length > str2.length){
        return res=str1+str2
    }else{
        return res=str2+str1;
    }
}

console.log(CopiesSmallerToLarger("ansh","raj"))
console.log(CopiesSmallerToLarger("ansh", "ansh"))
console.log(CopiesSmallerToLarger("raj", "ansh"))
console.log(CopiesSmallerToLarger("raj1224", "ansh"))