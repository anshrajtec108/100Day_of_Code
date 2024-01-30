function main(){
    printNum(12,1)
}
function printNum(e,s){
    if(e<s){
        return;
    }
    console.log(e)
    printNum(e-1,s)
}
main()