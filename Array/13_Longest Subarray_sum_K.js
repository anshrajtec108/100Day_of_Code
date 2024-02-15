function Longest_Subarray(arr) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[i] === arr[j]) {
                count = count + 1
            } else {
                break;
            }



        }
        if (count > max) {
            max = count
        }

    }
    return max
}
console.log(Longest_Subarray([1,2,3,4,1,1,1,4]))