// 1. 
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
factorial(3);
console.log(factorial(3));
// 2.
function multiply(num = 0, ...restOfNumber) {
    let mul = 1;
    for (let i = 0; i < restOfNumber.length; i++) {
        mul *= restOfNumber[i];
    }
    return num * mul;
}
multiply(1, 2, 3);
console.log(multiply(5, 5, 5));
// 3.
const reverseString = (str) => str.split("").reverse().join("");
reverseString('Hallo');
console.log(reverseString('Hallo'));
