function ReversString(str){
    let temp = ""
    for (let i = str.length - 1; i >= 0; i--) {
        temp = temp + str[i]
    }
    console.log(temp)
    return
}

ReversString("Raj")
ReversString("ANsh")
ReversString("bab")
