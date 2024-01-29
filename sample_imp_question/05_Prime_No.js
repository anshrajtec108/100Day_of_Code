function Prime_number_range(range) {
    let primeNumber = [];

    for (let i = 2; i <= range; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break; 
            }
        }

        if (isPrime) {
            primeNumber.push(i);
        }
    }

    return primeNumber;
}


console.log(Prime_number_range(100))
