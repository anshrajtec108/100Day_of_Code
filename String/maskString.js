function maskString(str) {
   
    const lastFour = str.slice(-4);

   
    const maskedString = '#'.repeat(str.length - 4) + lastFour;

    return maskedString;
}


const originalString = "5565534276455423";
const masked = maskString(originalString);
console.log(masked);
