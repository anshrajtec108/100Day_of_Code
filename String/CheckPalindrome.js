function check_String_Is_Palindrome(str) {
    let temp = ""
    for (let i = str.length - 1; i >= 0; i--) {
        temp = temp + str[i]
    }
    if (temp == str) {
        console.log("The String is Palindrome ")
    } else {
        console.log("The String is NOT Palindrome ")
    }
}

check_String_Is_Palindrome("naman")
check_String_Is_Palindrome("ANsh")
check_String_Is_Palindrome("bab")
