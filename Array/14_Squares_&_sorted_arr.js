function Squares_Sorted(arr){
    let res=[]
    for (let i = 0; i < arr.length; i++) {
       let temp= Math.abs(arr[i]);
       res.push((temp*temp))
    }
    res.sort((a, b) => a - b)
    return res
}
console.log(Squares_Sorted([-4,-1,0,3,10]));
