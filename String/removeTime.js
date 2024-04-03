function removeTime(dateString) {

    const parts = dateString.split(", ");

    const date = parts[0];
    return date;
}

// Example usage:
const dateWithoutTime = removeTime("Wed April 15, 7pm");
console.log(dateWithoutTime); // Output: "Wed April 15"
