function Triangle_StarPattern(n){
    let res=""
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            res=res+"*" 
        }
        res=res+"\n"
    }return res
}
console.log(Triangle_StarPattern(4))