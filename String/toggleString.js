function toggleString(str) {
    let toggledString = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            toggledString += char.toLowerCase();
        } else {
            toggledString += char.toUpperCase();
        }
    }
    return toggledString;
}

const originalString = 'Hello World';
const toggledString = toggleString(originalString);

console.log('Original String:', originalString);
console.log('Toggled String:', toggledString);
