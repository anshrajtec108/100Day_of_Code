/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 
*/
let date=new Date()

let day=date.getDay()
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log('Today Day is:',dayList[day]," ." );


let hour=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()

let prepand =(hour>=12) ? 'PM':'AM';
hour=(hour>=12)? hour-12:hour;

if(hour==12 && prepand=='PM'){
    prepand="Noon"
}

if(hour==0 && prepand=='AM'){
    prepand='MidNight'
}

console.log('Current time is : ',hour,prepand,':',minutes,':',seconds)


