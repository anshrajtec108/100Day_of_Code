/*
Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1. */

function finalValueAfterOperations(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == "--X" || nums[i] == "--X") {
            count--;
        } else {
            count++;
        }
    }
    return count;
}

let nums = ["--X", "X++", "X++"];
console.log(finalValueAfterOperations(nums));
