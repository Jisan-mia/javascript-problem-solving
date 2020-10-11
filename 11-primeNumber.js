//simple and not that much efficientway
function isPrime(n) {

    if (n == 1) {
        return false
    } else if (n == 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false
            }
        }
        return true;
    }


}
let result = isPrime(17);
//console.log(result);

//mediam efficient way

function isPrime1(n) {
    if (n === 1) {
        return false;
    } else if (n === 2 || n === 3) {
        return true;
    } else {
        for (i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i == 0) {
                return false
            }
        }
        return true;
    }
}
let result1 = isPrime1(13);
console.log(result1);
