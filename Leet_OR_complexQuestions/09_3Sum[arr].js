// 3 Sum =0
//error is not solved
function ThreeSum(nums){
    let resarr=[]
    for (let i = 0; i < nums.length; i++) {
       for (let j = 0; j < nums.length; j++) {
        if(i != j){
        for (let k = 0; k < nums.length; k++) {
            if(nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k]){
                let sumofThree=nums[i]+nums[j]+nums[k]
               console.log("sumofThree",sumofThree)
                if(sumofThree===0){
                    console.log("sumofThree===0",sumofThree===0)
                    resarr.push([nums[i],nums[j],nums[k]])
                    break;
                }
            }else{
                continue;
            }
        }
        
       }else{
        continue;
       }
    }
        
    }
    if(resarr.length<=0){
        return 0;
    }
    return resarr;
}

let nums=[-1,0,1,2,-1,-4]
console.log(ThreeSum(nums))