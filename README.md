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
7. fibonacci sequence
```js
//fibonacci series using foor loop
//fibonacci series=  0 1 1 2 3 5 8 13 21 34 55 89....


//fibo[2] = fibo[2 - 1] + fibo[2 - 2];
//fibo[3] = fibo[3 - 1] + fibo[3 - 2];
//fibo[4] = fibo[4 - 1] + fibo[4 - 2];
//fibo[5] = fibo[5 - 1] + fibo[5 - 2];
//fibo[n] = fibo[n - 1] + fibo[n - 2];
//fibo[i] = fibo[i - 1] + fibo[i - 2];

//fibonacci series using for loop
function fibonacci(n) {

    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        //    console.log(fibo[i], fibo[i - 1], fibo[i - 2])
    }
    return fibo;
}

console.log(fibonacci(10));


//fibonacci series using while loop
function fibonacci1(n) {
    let i, fibo;
    fibo = [0, 1];
    i = 2;
    while (i <= n) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        i++;
    }
    return fibo;
}

console.log(fibonacci1(10));

//create a fibiancci series in a recursive way
//fibo[n] = fibo[n-1] + fibo[n-2]
//[0, 1, 1, 2, 3, 5, 8, 13, 21..]
function fibonacci3(n) {
	if (n == 0) {
		return [0];
	}
	if (n == 1) {
		return [0, 1];
	} else {
		//calculate array nth element
		let fibo = fibonacci3(n - 1);

		let nextElement = fibo[n - 1] + fibo[n - 2];
		fibo.push(nextElement);
		return fibo;
	}
}

var result1 = fibonacci3(10);
console.log(result1);

```
