function findGreatest_no(a,b,c){
    let grs=0
    if(a>b){
        grs=a
    }else{
        grs=b
    }
    if(grs>c){
        return grs
    }
    else{
        return c;
    }
}
console.log(findGreatest_no(4,3,3))