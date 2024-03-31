function CountVowel(str){
    let count=0
    for (let  i = 0;  i < str.length;  i++) {
        switch (str[i]) {
            case 'a':
                count++
              break;
            case 'e':
                count++
              break ;
            case 'i':
                count++
              break ;
            case 'o':
                count++
              break ;
            case 'u':
                count++
              break ;
            case 'A':
                count++
              break ;
            case 'E':
                count++
              break ;
            case 'I':
                count++
              break ;
            case 'O':
                count++
              break ;
            case 'U':
                count++
              break ;
            default:
                break ;
        }
        
    }
    return count;
}
console.log(CountVowel("Ansh"));
console.log(CountVowel("Amit"));
console.log(CountVowel("Hello world"));
console.log(CountVowel("BBBBB"));