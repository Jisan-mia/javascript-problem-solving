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
7. fibonacci sequence for loop
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
```
8. fibonacci sequence while loop
```js
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
```

9. fibonacci sequence recursive way
```js
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

10. nth number of fibonacci series
```js
//get nth number fibonacci series  using recursive function
//fibo[n] = fibo[n-1] + fibo[n-2]

function fib(n) {
	if (n == 0) {
		return 0;
	}
	if (n == 1) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
}

let result = fib(100);
console.log(result);
```

11. Prime number
```js
//simple and not that much efficientway
function isPrime(n) {
	if (n == 1) {
		return false;
	} else if (n == 2) {
		return true;
	} else {
		for (let i = 2; i < n; i++) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}
}
let result = isPrime(3);
console.log(result);

//mediam efficient way

function isPrime1(n) {
	if (n === 1) {
		return false;
	} else if (n === 2 || n === 3) {
		return true;
	} else {
		for (i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
			if (n % i == 0) {
				return false;
			}
		}
		return true;
	}
}
let result1 = isPrime1(13);
// console.log(result1);
```
12. Swap value
```js
// 4 way to swap variable values in JavaScript
// suppose we have two variable a and b, we want to swap there values
// for example the value of a and b are 2, 3
// the result would be a = 3, b = 2

let a = 2;
let b = 3;

// using temp variable
let temp = a;
a = b;
b = temp;
console.log(a,b) // a = 3, b = 2

// using array destructuring 
[a, b] = [b, a];
console.log(a,b) // a = 3, b = 2

// using math in one line
b = a + (a = b) - b;
console.log(a,b) // a = 3, b = 2

// using arithmetic operator
a = a + b; // add a, b then assign to a(a = 5)
b = a - b; // subtract b(3) from a(5) and assing to b(b = 2)
a = a - b; // subtract b(2) from a(5) and assign to a(a = 3)
console.log(a,b) // a = 3, b = 2
```
13. Random Number
```js
//random number from 0-1;
let randomNumber = Math.round(Math.random());


//random number from 0-6;
randomNumber = Math.round(Math.random() * 6)


//random number from 1-10
randomNumber = Math.floor(Math.random() * 10) + 1;
//console.log(randomNumber);

// 10 random number at a time
for (let i = 1; i <= 10; i++) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

const num = 2.1205;
const floorResult = Math.floor(num);
const ceilResult = Math.ceil(num);
const roundResult = Math.round(num);
//console.log(roundResult);
```
14. Maximum of 3 num
```js
function max3Num(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
//console.log(max3Num(40, 50, 60));


//using math object
const maxNumber = Math.max(5, 34, 30);
console.log(maxNumber)
```
15. Largest number of array
```js
// find the largest number of an array

function largesNumOfArr(array) {
	let largestNum = array[0];

	for (let i = 0; i < array.length; i++) {
		let element = array[i];

		if (element > largestNum) {
			largestNum = element;
		}
	}
	return largestNum;
}
const marks = [25, 89, 53, 65];

console.log(largesNumOfArr(marks));
```
16. Smallest number of an array
```js
//find the smallest number of an array
function smallestNumOfArr(array) {
    let smallestNum = array[0];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element < smallestNum) {
            smallestNum = element;
        }
    }
    return smallestNum;
}
const marks = [25, 89, 15, 65];

console.log(smallestNumOfArr(marks));
```
17. Sum of array items
```js
//function
function arraySum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum = sum + element;
    }
    return sum;
}

const numbers = [85, 78, 90, 80, 88];
console.log(arraySum(numbers));

//using reduce method
const total = numbers.reduce((acc, currentValue) => acc + currentValue , 0)
```
18. Remove duplicate from arrays
```js
//function of unique array
function uniqueArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        let index = newArray.indexOf(element);
        if (index == -1) {
            newArray.push(element);
        }
    }
    return newArray;
}
const ticket = [1, 2, 3, 3, 4, 5, 2, 6, 7, 7, 9, 4, 10, 2];

const result = uniqueArray(ticket);
console.log(result);

// an easy way using set
const uniqueArr2 = [...new Set(ticket)]
```
19. Word count
```js
// count the number of words in a string
function wordCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            count++;
        }
    }
    count++;
    return count;
}

let myString = 'My name is Jisan. I am a programmer'
//console.log(wordCount(myString));


//another small solution
function countWord(str) {
    // split method will spearte all the word by comma and turn the string into an array then we will get the lenght of the array using .lenght;
    return str.split(' ').length;
}
console.log(countWord(myString));




//acurate way
function count_words(str) {
    //exclude start and end white space
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1
    str = str.replace(/[ ]{2,}/gi, " ");
    //exclude newline with a start spacing
    str = str.replace(/\n /, "\n");

    return str.split(' ').length;;
}
myString = "My   name is Jisan."
console.log(count_words(myString))

```
20. Different ways to reverse a string
```js
//reverse string with increement for loop
function reverseString(str) {
    let reverse = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let myString = 'Reverse this string';
//console.log(reverseString(myString));


//reverse string with a decrementing for loop
function reverseString1(str) {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        reverse = reverse + char;
    }
    return reverse;
}

myString = 'Reverse';
//console.log(reverseString1(myString));


//using array
function reverseString2(str) {
    if (!str || str.length < 2 || typeof str != 'string') {
        return "Not Valid"
    }

    const revArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join('');
}
myString = 'Programmer';
console.log(reverseString2(myString))





//reverse a string using built-in function
function stringReverse(str) {
    //use the split() mehtod to return a new array
    let splitString = str.split("");

    //use the reverse() mehod to  revere the new creted array;
    let reverseArray = splitString.reverse();

    //use the join() mehod to join all elements of the array into string
    let joinArray = reverseArray.join("");
    return joinArray;

    // we can do everything above in one line
    // return str.split("").reverse().join("");
}
console.log(stringReverse(myString));
```

21. feet to mile
```js
//feet to mile
let mile;

function feetToMile(feet) {
    mile = feet / 5200;
    return mile;
}
const result = feetToMile(6500);
console.log(result)
```
22. check palindrome
```js
const string = "level";
// using built in functions
function isPalindrme1(string) {
	return string.split("").reverse().join("") == string;
}

console.log(isPalindrme1(string)); // true

// using for loop
const isPalindrome2 = (string) => {
	let strLen = Math.floor(string.length / 2);
	string = string.toLocaleLowerCase();

	for (let i = 0; i < strLen; i++) {
		if (string[i] !== string[strLen - i - 1]) {
			return false;
		}
	}
	return true;
};
```
