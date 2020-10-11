//factorial 
// 3! = 1X2X3
// 4! = 1X2X3X4
// 5! = 1X2X3X4X5


//factorial using recursive function
// 0! = 1
// 2! = 1X2
// 3! = 1X2X3 == 2! X 3
// 4! = 1X2X3X4 == 3! X4
// 5! = 1X2X3X4X5 == 4! X 5
// 6! = (6-1)! X 6
// 7! = (7-1)! X 7
// n! = (n-1)! X n

function recurFactorial(n) {
    let fact;
    if (n == 0) {
        return 1;
    } else {
        return n * recurFactorial(n - 1);
    }

}
console.log(recurFactorial(5));
