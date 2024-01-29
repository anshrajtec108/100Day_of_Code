// remove-duplicates-from-sorted-array
//done 

// function removeDuplicate(nums) {
//     let result = [];
    
//     for (let i = 0; i < nums.length; i++) {
//         let isDuplicate = false;

//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         if (!isDuplicate) {
//             result.push(nums[i]);
//         }
//     }

//     return result;
// }

//tc=O(n^2)

//optimal
function removeDuplicate(nums) {
    let set = new Set();
    let result = [];

    for (let num of nums) {
        if (!set.has(num)) {
            result.push(num);
            set.add(num);
        }
    }
    return result;
}
//tc=O(n)

let nums = [0,0,1,1,1,"A","A",2,2,3,3,4,4,5,6,7,8]
console.log(removeDuplicate(nums));
// testcase:-  [0,0,1,1,1,2,2,3,3,4]  ""  [1,1,2]