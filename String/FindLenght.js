/* Write a program which receives a string str that calculates the length of a string
   and return true if the length is greater than 7 without using strlen() */

function FindLenght_without_methods(str){
   let length=0
   for(let char of str){
    length++
   }
   return length>7
}
console.log(FindLenght_without_methods("ansh"));
console.log(FindLenght_without_methods("Raj"));
console.log(FindLenght_without_methods("Hello"));
console.log(FindLenght_without_methods("Bye,Bye lazy"));