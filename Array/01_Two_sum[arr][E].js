//URL=https://leetcode.com/problems/two-sum/description/
// question=Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Time Taken=150ms


const twoSum =(nums, target)=>{
    let number=[]
    let temp =true
    for (let i = 0; i < nums.length; i++) {
    if(temp){
       for(let j=0;j < nums.length; j++){
        if (i==j){
            continue;
        }
        if((nums[i]+nums[j])==target){
            number.push(i);
            number.push(j);
            // console.log(i,j)
            temp = false;
            break;
        }
       }
    }
     
    }
    return number;
};

nums=[3,2,4,5,7,8,2,6,8]
console.log("result",twoSum(nums,6))





//better code 
//Time taken=80ms
/* var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const addedNums = nums[i] + nums[j];
            if (addedNums === target) {
                return [i , j]
            }
        }
    }
};*/

