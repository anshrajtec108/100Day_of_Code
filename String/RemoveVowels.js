function RemoveVowelString(str){
    let temp=""
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                 
                break;
            case 'e':
                 
                break;
            case 'i':
                 
                break;
            case 'o':
                 
                break;
            case 'u':
                 
                break;
            case 'A':
                 
                break;
            case 'E':
                 
                break;
            case 'I':
                 
                break;
            case 'O':
                 
                break;
            case 'U':
                 
                break;
            default:
                temp=temp+str[i]
                break;
        }

    }
    return temp;
}
console.log(RemoveVowelString("Ansh"));
console.log(RemoveVowelString("Amit"));
console.log(RemoveVowelString("Hello world"));
console.log(RemoveVowelString("BBBBB"));