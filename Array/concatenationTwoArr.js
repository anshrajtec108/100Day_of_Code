
/*Example 1:
https://leetcode.com/problems/concatenation-of-array/
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1] */

function getConcatenation(nums){
  
    let res = []
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < nums.length; j++) {
            res.push(nums[j]);
        }
    }
    // let res = nums.concat(nums)
      return res
}
let nums=[1,2,3,4]
console.log(getConcatenation(nums));