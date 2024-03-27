function FindLenght_without_methods(str){
    let count=0
    for (let index = 0; index < str.length; index++) {
        count++
    }
    return count
}
console.log(FindLenght_without_methods("ansh"));
console.log(FindLenght_without_methods("Raj"));
console.log(FindLenght_without_methods("Hello"));
console.log(FindLenght_without_methods("Bye,Bye"));