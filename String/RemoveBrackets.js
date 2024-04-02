function RemoveBrackets(str){
 let temp=""
 for (let i = 0; i < str.length; i++) {
    if(str[i]==="(" || str[i]===")"){
        continue;
    }else{
        temp=temp+str[i]
    }
    
 }
 console.log(temp)
}

RemoveBrackets("(Ansh ) raj()()")
RemoveBrackets("h()  ()v  ()fdg")
RemoveBrackets("{ansh}}")
RemoveBrackets("sttertert5768()")