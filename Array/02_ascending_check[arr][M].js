//Write code to check if an array is sorted in ascending order.
//Better
function ascendingCheck(arr) {
    let isAsc = false;
    let temp = [...arr]
    temp.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === temp[i]) {
            isAsc = true
            continue;
        } else {
            isAsc = false
            break;
        }
    }
    if (isAsc) {
        console.log('The array is in ascending order.')
    } else {
        console.log('The array is not in ascending order.')
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8,9]
ascendingCheck(arr)