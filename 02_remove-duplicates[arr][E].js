// remove-duplicates-from-sorted-array
//done 

function removeDuplicate(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let isDuplicate = false;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result.push(nums[i]);
        }
    }

    return result;
}

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicate(nums));
// testcase:-  [0,0,1,1,1,2,2,3,3,4]  ""  [1,1,2]