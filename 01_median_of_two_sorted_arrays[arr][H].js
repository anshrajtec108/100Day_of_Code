//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//Time Taken=204ms

const  findMedianSortedArrays = (nums1, nums2)=>{
    let result;
    let combinearray=[...nums1,...nums2];
    combinearray.sort(function(a, b) {
        return a - b;
    })
    console.log(combinearray);
    let a=(combinearray.length-1)/2
    // console.log("a",a)
    if (Number.isInteger(a)){
        result=combinearray[a]
        // console.log("result for if",result)
       return result
      
    }
    else{
    let b=Math.floor(a);
    result=(combinearray[b]+(combinearray[(b+1)]))/2
    //console.log("result for else",result)
    return result;
     }

};
let nums1=[1,2]
let nums2=[3,4]
console.log(findMedianSortedArrays(nums1,nums2))

