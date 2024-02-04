// replace with _
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

function removeElement(nums,val){
    let temp1=[]
    let temp2=[]
    for (let i = 0; i < nums.length; i++) {
            
        if(nums[i]===val){
            temp2.push("_")
        }else{
            temp1.push(nums[i])
        }
    }
    let arr=[...temp1,...temp2]
    return arr;
}

console.log(removeElement([0,1,2,2,3,0,4,2],2))
 