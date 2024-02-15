/*
Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Examples:

Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Minimum element is: 35
*/

function small_largestNO(arr){
 arr.sort((a, b) => a - b)
 console.log("Minimum element is:",arr[0])
 console.log("Maximum element is: ",arr[arr.length-1])
}
small_largestNO([22, 14, 8, 17, 35, 3])


//Output
// Minimum element is: 3
// Maximum element is:  35