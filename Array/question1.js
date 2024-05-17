function Cap(str) {
    let res = []
   let isSpace = false
    for (let i = 0; i< str.length; i++){
        let currnetE = str[i]
        if (currnetE === ' ') {
            res.push(currnetE)
            isSpace = true
            continue;
        }
        if(isSpace) {
            res.push(currnetE.toUpperCase());
            isSpace = false;
        }
        else{
                res.push(currnetE)
            }
       
    }
    let temp = res.join('')
    return temp
}

console.log(Cap('Go pageless by default'));
