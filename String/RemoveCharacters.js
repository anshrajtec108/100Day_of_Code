function RemoveCharacters(str){
    let temp=""
    for (let i = 0; i < str.length; i++) {
        let ch=str[i]
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
       temp=temp+ch
    }
}
console.log(temp);
}

RemoveCharacters("Ra%$j@ ")
RemoveCharacters("AN^*($*(sh")
RemoveCharacters("ba$*(b")
