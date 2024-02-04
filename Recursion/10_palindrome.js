 let reverseStrval=""
 function main(str){
    if(str.length<1){
        return "is a single no comparison "
    }
     reverseStr(str.length-1,str)
     console.log(reverseStrval)
     if(str===reverseStrval){
        return "it is palindrome String"
     }
     else {
        return "it is not palindrome String"
     }
  }
  function reverseStr(i,str){
    if(i<0){
        return reverseStrval
    }
    reverseStrval=reverseStrval+str[i]
    return reverseStr(i-1,str)
  }

  console.log(main("racecar")) //it is palindrome String