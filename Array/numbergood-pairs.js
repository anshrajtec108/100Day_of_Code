/*
https://leetcode.com/problems/number-of-good-pairs/description/

Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

function goodPairs(nums){
    let count=0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i]==nums[j] && i<j){
                count ++
            }
      }
        
    }
    
    return count
}

let nums = [1, 2, 3, 1, 1, 3]
console.log(goodPairs(nums));