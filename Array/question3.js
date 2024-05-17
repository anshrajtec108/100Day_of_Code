function sort(arr) {
let temp;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > arr[i + 1]){
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    return arr
}
console.log(sort([10, 30, 20, 40]));

// question 4
console.log(2 +'2'=== '22')

// question 5
function fetch() {
    A = 7;
    console.log(A)
}
let A;
fetch();
