function LongestAndSmallest(str1, str2, str3) {
    // Calculate lengths of input strings
    let strLength1 = str1.length;
    let strLength2 = str2.length;
    let strLength3 = str3.length;

    // Initialize variables to store longest and shortest strings
    let longest = "";
    let shortest = "";

    // Compare lengths to find longest string
    if (strLength1 >= strLength2 && strLength1 >= strLength3) {
        longest = str1;
    } else if (strLength2 >= strLength1 && strLength2 >= strLength3) {
        longest = str2;
    } else {
        longest = str3;
    }

    // Compare lengths to find shortest string
    if (strLength1 <= strLength2 && strLength1 <= strLength3) {
        shortest = str1;
    } else if (strLength2 <= strLength1 && strLength2 <= strLength3) {
        shortest = str2;
    } else {
        shortest = str3;
    }

    // Return the longest and shortest strings
    return [longest, shortest];
}

// Example usage:
const [longestStr, shortestStr] = LongestAndSmallest("apple", "banana", "orange");
console.log("Longest string:", longestStr);
console.log("Shortest string:", shortestStr);
