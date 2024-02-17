 function containsDuplicate (nums) {
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};
console.log(containsDuplicate([,1,2,5,4,,7,5,,9,,5,7,2,]))