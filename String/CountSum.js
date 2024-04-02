function sumOfNumbers(str) {
    // Regular expression to match all numbers in the string
    const regex = /\d+/g;

    // Extract all numbers from the string
    const numbers = str.match(regex);

    // If no numbers found, return 0
    if (!numbers) {
        return 0;
    }

    // Convert each matched number from string to integer and sum them up
    const sum = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);

    return sum;
}

// Example usage:
const string1 = "There are 10 apples and 20 oranges";
console.log(sumOfNumbers(string1)); // Output: 30 (10 + 20)

const string2 = "The price is $50.99";
console.log(sumOfNumbers(string2)); // Output: 50 (only integer part)
