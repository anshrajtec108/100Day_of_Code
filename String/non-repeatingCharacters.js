function non_repeatingCharacters(str){
    let res=""
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(str[i]===str[j]){
                // res = res + str[i]
                continue;
            }else{
                res = res + str[j]
                break;
            }
        }
        
    }
    return res
}
console.log(non_repeatingCharacters("anshraj"));