function RemoveSpaces(str) {
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            temp += str[i];
        }
    }
    return temp;
}

console.log(RemoveSpaces("AnshRaj"));
console.log(RemoveSpaces("  green"));
console.log(RemoveSpaces("Hello    "));
console.log(RemoveSpaces("Hello   world"));