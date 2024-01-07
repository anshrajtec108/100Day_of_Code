const maxArea = function(height) {
    let water = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {
        water = Math.max(water, Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer));
        
        if (height[leftPointer] > height[rightPointer]) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }

    return water;
}

console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));




