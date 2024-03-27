function CheckAlphabetORnot(ch){
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
        return "The inserted character is an Alphabet  "+ch;

    else
        return "The entered character is not an Alphabet  "+ch;
}

console.log(CheckAlphabetORnot("a"));
console.log(CheckAlphabetORnot("6"));
console.log(CheckAlphabetORnot("$")); 
console.log(CheckAlphabetORnot("12"));