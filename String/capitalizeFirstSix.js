function capitalizeFirstSix(str) {
    // Extract the first six characters
    const firstSix = str.slice(0, 6+1);

    // Convert the first six characters to uppercase
    const capitalized = firstSix.toUpperCase();

    // Concatenate the capitalized part with the rest of the string
    const result = capitalized + str.slice(6+1);

    return result;
}

// Example usage:
const originalString = "tic tac toe is a fun game";
const modifiedString = capitalizeFirstSix(originalString);
console.log(modifiedString); 