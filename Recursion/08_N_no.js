function main(){
    printNum(1,12)
}
function printNum(i,n){
    if(i>n){
        return;
    }
    console.log(i)
    printNum(i+1,n)
}
main()