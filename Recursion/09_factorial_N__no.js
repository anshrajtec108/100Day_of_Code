function main(n) {
    if (n === 0) {
        return 1;
    } else {
        return factorial(n);
    }
}

function factorial(n) {
    if (n === 1) {
        return 1; 
    } else {
        return n * factorial(n - 1); 
    }
}

console.log(main(5)); 
