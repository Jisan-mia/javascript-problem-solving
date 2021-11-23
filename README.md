## javascript-problem-solving

1. Unit converter
```js
//meter to kilometer
let kilo;

function meterToKilo(meter) {
    kilo = meter / 1000;
    let kiloIntpart = Math.floor(kilo);
    let kiloDeciPart = ((kilo % 1).toFixed(3)).replace('0.', '');

    let kiloResult = kiloIntpart + ' kilo ' + kiloDeciPart + ' meter';
    return kiloResult;
}
let kilometer = meterToKilo(650);
console.log(kilometer)
```
3. Leap Year 
```js
function isLeapYear(year) {

    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else if (year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

const checkLeapYear = isLeapYear(1700);
console.log(checkLeapYear);

//solution number 2
function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leapYear(2000))

//solution number 3

function checkingLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            return true;
        } else if (year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(checkingLeapYear(2200))
```
4. Factorial using for loop
```js
//factorial 
// 3! = 1X2X3
// 4! = 1X2X3X4
// 5! = 1X2X3X4X5

// factorial using for loop
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

//start from the current number
function factorialBack(n) {
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact = fact * i;
    }
    return fact
}
//console.log(factorialBack(4))
//console.log(factorial(10))
```
5. Factorial using while loop
```js
//factorial 
// 3! = 1X2X3
// 4! = 1X2X3X4
// 5! = 1X2X3X4X5


//factorial using while loop
function factorial1(n) {
    let i, fact;
    i = 1;
    fact = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}
console.log(factorial1(5))
```
6. Factorial in Recursive way
```js
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
```
