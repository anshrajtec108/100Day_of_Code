function leap_year(year){
    if(year % 400 ==0){
        return "yes"
    }
    if((year % 4==0)  && (year % 100 !=0)){
        return "yes"
    }else{
        return "No"
    }
}

console.log(leap_year(2028),"it is leap year ")