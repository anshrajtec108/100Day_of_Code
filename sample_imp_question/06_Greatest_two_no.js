function findGreatest_no(a,b){
    if(a===b){
        return `the ${a} and ${b} are equal`
    }
    if(a>b){
        return `the ${a} is Greatest number`
    }else{
        return `the ${b} is Greatest number`
    }
}
console.log(findGreatest_no(5,1))