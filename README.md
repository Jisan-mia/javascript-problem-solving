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
23. check sim operator available in bangladesh
```js
function checkPhoneNum(number) {
	const regex = /(\+88)?-?01[1-9]\d{8}/g;
	if (regex.test(number)) {
		if (/(\+88)?-?018\d{8}/g.test(number)) {
			return "It's robi number";
		} else if (/(\+88)?-?017\d{8}/g.test(number)) {
			return "It's grameen number";
		} else if (/(\+88)?-?019\d{8}/g.test(number)) {
			return "It's banglalink number";
		} else if (/(\+88)?-?016\d{8}/g.test(number)) {
			return "It's airtle number";
		}
		return "There is no operator with this pattern";
	} else {
		return "Number is invalid";
	}
}

const text = "+8801901422927";
// const regex = /(\+88)?-?01[1-9]\d{8}/g;
const result = checkPhoneNum(text);
console.log(result);
```
24. check palindrome for both number and string
```js
function isPalindrome(input) {
	if (typeof input === "number" || typeof input === "string") {
		if (typeof input === "number") {
			input = input.toString();
		} else if (typeof input === "string") {
			input = input.toLowerCase();
		}

		let reverseString = "";
		for (let i = input.length - 1; i >= 0; i--) {
			reverseString += input[i];
		}

		if (reverseString === input) {
			return true;
		} else {
			return false;
		}
	}
}
const text = 555555;
const result = isPalindrome(text);
console.log(result);
```
25. String to word
```js
function stringToWordArr(string) {
	if (typeof string === "string") {
		return string.split(" ");
	} else {
		return "Enter valid input";
	}
}

const text = "My name is Jisan";
const result = stringToWordArr(text);
console.log(result);
```
26. Array max sub sum
```js
function getMaxSubSum(array) {
	let maxSubSum = 0;
	for (let i = 0; i < array.length; i++) {
		let sumFixedStart = 0;
		for (let j = i; j < array.length; j++) {
			sumFixedStart += array[j];
			maxSubSum = Math.max(maxSubSum, sumFixedStart);
		}
	}
	return maxSubSum;
}

const result = getMaxSubSum([-1, 2, 3, -9, 11]);
// console.log(result);

// optimzed solution in O(n)
function getMaxSubSum2(array) {
	let maxSum = 0;
	let partialSum = 0;
	for (let item of array) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if (partialSum < 0) partialSum = 0;
	}
	return maxSum;
}
const result1 = getMaxSubSum2([-1, 2, 3, -9]);
// console.log(result1);

// solution 3
function sol3(arr) {
	let subSum = [];
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		for (let j = i; j < arr.length; j++) {
			sum += arr[j];
			subSum.push(sum);
		}
	}
	return Math.max(...subSum);
}
console.log(sol3([-1, 2, 3, -9]));
```
27. Most used char in a string
```js
// Write a function that takes a string, and returns the character that is most commonly used in the string.

function getMostUsesChar(str) {
	if (typeof str == "string") {
		let charCount = {};
		let mostUseChar = "";
		let mostUseCharCount = 0;
		for (let char of str) {
			charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
		}

		for (let key in charCount) {
			// console.log(charCount[key]);
			if (charCount[key] > mostUseCharCount) {
				mostUseCharCount = charCount[key];
				mostUseChar = key;
			}
		}

		return mostUseChar;
	}
	return;
}

const result = getMostUsesChar("Jisaan-mia");
console.log(result);
```
28. remove duplicate from an array using reduce
```js
// remove duplicate from an array
const arrWithDuplicates = [3, 4, 1, 6, 23, 4, 3, 8, 1];
const uniqueArr = arrWithDuplicates.reduce((acc, currentValue) => {
	if (acc.indexOf(currentValue) === -1) {
		acc.push(currentValue);
	}
	return acc;
}, []);
console.log(uniqueArr);
```
29. sort array of objects
```js
// Given an array of objects, sort the objects by population size. Return the entire object.

function sortObj(arrOfObj) {
	return arrOfObj.sort((a, b) => b.population - a.population);
}
const arrObj = [
	{ country: "bd", population: 20 },
	{ country: "ca", population: 10 },
	{ country: "la", population: 6 },
	{ country: "ma", population: 100 },
];
console.log(sortObj(arrObj));
```
30. Anagram
```js
// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// anagram: An anagram is another word or phrase formed by rearranging letters of the first word or phrase. eg.
// Tar = Rat,
// Night = Thing
// Arc = Car
// Elbow = Below
// State = Taste

function isAnagram(str1, str2) {
	if (str1.length != str2.length) {
		return false;
	}
	let sort1 = str1.toLowerCase().split("").sort();
	let sort2 = str2.toLowerCase().split("").sort();

	return sort1.join("") == sort2.join("");
}

const result = isAnagram("Tar", "Rat");
console.log(result);
```
31. Armstrong number
```js
// An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false.
// eg. 153, 370, 371, 407, 1634, 8208 etc. are armstrong number
// 153 = 1³ + 5³ + 3³
// 1634 = 1⁴ + 6⁴ + 3⁴ + 4⁴
function isArmstrong(number) {
	const numStr = number.toString();
	const length = numStr.length;
	let sum = 0;

	for (let i = 0; i < length; i++) {
		sum += Math.pow(Number(numStr[i]), length);
	}

	return sum == number;
}
const checkArmstrong = isArmstrong(5);
console.log(checkArmstrong);
```
32. character to ascii
```js
//  Create a function that will convert a string in an array containing the ASCII codes of each character

function getAsciiCode(str) {
	const arrOfAscii = [];

	for (let i = 0; i < str.length; i++) {
		arrOfAscii.push(str.charCodeAt(i));
	}
	return arrOfAscii;
}

console.log(getAsciiCode("My Name is Jisan"));
```
33. merge 2 array exclusive
```js
// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function getUniqueOf2arr(arr1, arr2) {
	let uniqueArr = [];
	// first filter out items from arr1 that is not in arr2
	uniqueArr = [...arr1.filter((num) => !arr2.includes(num))];
	// second spread arr1 items after filtering then
	// do the same thing as we did to filter out in arr1 for arr2
	uniqueArr = [...uniqueArr, ...arr2.filter((num) => !arr1.includes(num))];

	return uniqueArr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8, 9, 10];
const result = getUniqueOf2arr(arr1, arr2);
console.log(result); // [1, 2, 3, 6, 7, 8, 9, 10]
```
34. factorial in recursive way
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
35. fibonacci series using recursive funck
```js
//fibonacci series using recursive func
//fibonacci series=  0 1 1 2 3 5 8 13 21 34 55 89....

//fibo[2] = fibo[2 - 1] + fibo[2 - 2];
//fibo[3] = fibo[3 - 1] + fibo[3 - 2];
//fibo[4] = fibo[4 - 1] + fibo[4 - 2];
//fibo[5] = fibo[5 - 1] + fibo[5 - 2];
//fibo[n] = fibo[n - 1] + fibo[n - 2];
//fibo[i] = fibo[i - 1] + fibo[i - 2];

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
36. check if a(object) has a key b(string). if so return true else false
```js
function checkObjHasKey(a, b) {
	if(a[b]) {
		return true
	}
	return false
}
```
37. median
```js
/**
 * Given two sorted arrays array1 and array2 of size m and n respectively.
 * Find the median of the two sorted arrays.
 *
 * @Example 1:
 * Input:
 * m = 3, n = 4
 * array1 = [1, 9, 15]
 * array2 = [2, 4, 5, 23]
 *
 * Output: 5
 *
 * @Example 2:
 * Input:
 * m = 2, n = 4
 * array1 = [41, 78]
 * array2 = [3, 4, 7, 8]
 *
 * Output: 7.5
 *
 * Expected Time Complexity: O(min(log n, log m)).
 * Expected Auxiliary Space: O((n+m)/2).
 */
 ```
 37. Bracket Mather
 ```js
 // Have the function bracketMather(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0
 function bracketMather(str) {
  let open = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') open++;
    if (str[i] === ')') open--;
    if (open < 0) return 0;
  }

  return open ? 0 : 1;
}

bracketMather('(a+b)(b-a))')  // 0
 ```
 38. anagram
 ```js
function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
```
39. clone javascript objects
```js
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }
const depthClone = object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})
```
40. generate an array, containing the Fibonacci sequence, up until the nth term
```js
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
```
41. fizzbuzz
```js
/*
Problem: create a loop that execute from 1-100
i) Every time you reach a multiple of 3(3, 6, 9 etc) you replace the number with the word "Fizz" or log "Fizz"
ii) Every time you reach a multiple of 5(5, 10, 15, etc) you replace the number with "Buzz" or log "Buzz"
iii) and if you reach a multiple of 3 AMD 5(15, 30, 46 etc) you replace the number with "FizzBuzz" of log "FizzBuz"
iv) if any of the above condition isn't true then log the current number 
*/
function normalFizzBuzz(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
// normalFizzBuzz(1, 10);

// solve this FizzBuzz question without using reminder % operator
function isFloatNum(num) {
	// console.log(num);
	return num.toString().includes(".");
}
function withoutRemFizzBuzz(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		if (!isFloatNum(i / 3) && !isFloatNum(i / 5)) {
			console.log("FizzBuzz");
		} else if (!isFloatNum(i / 3)) {
			console.log("Fizz");
		} else if (!isFloatNum(i / 5)) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
// withoutRemFizzBuzz(1, 100);
```
41. remove falsy values from an array
```js
// remove falsy value from an array
// falsy values
// false, 0 , ""(blank), null, undefined, NaN(Not a Number)

const numArrWithFalsyValues = [1, 2, NaN, 3, "", 4, 5, null, false];

const numsWithoutFalsyValues = numArrWithFalsyValues.filter(Boolean);

console.log(numsWithoutFalsyValues); // [1, 2, 3, 4, 5]

// Explanation
// Boolean(expression) in javascript returns true or false
console.log(Boolean(2 > 3)); // return true since 2 is getter than 3 and so it is true and also returns true
console.log(Boolean(45 > 50)); // return false since 45 is not getter than 50 and so it is false and returns false
console.log(Boolean("Jisan")); // return true since 'Jisan' is not an falsy value
console.log(Boolean("")); // return true since ''(blank) is an falsy value
```
42. convert year into seconds
```js
const yearToSecond(year) {
	const days = year * 365
	const hours = days * 24
	const minutes = hours * 60
	const seconds = minutes * 60
	return seconds;
}
yearToSecond(1) 

```

43. Count word [source](https://gist.github.com/joynal/cb9b9b6fdd30c1fb6ef805266500f706)
```js
// input an string and return the counts of every word used othe that string
// in an object, eg.
var inputStr = "Fear leads to anger ; anger leads to hatred ; hatred leads to conflict ; conflict leads to suffering"
var exptedOutput = {
    "Fear": 1,
    "leads": 4,
    "to": 4,
    "anger": 2,
    ";": 3,
    "hatred": 2,
    "conflict": 2,
    "suffering": 1
}

const mutableApproach = str => {
	let countedWords = {};
	str.split(" ").forEach((word) => {
		if(countedWords[word]) {
			countedWords[word] += 1;
			return;
		}
		countedWords[word] = 1;
	})
	return countedWords
}

const functionalApproach = str => 
	str.split(" ").reduce((acc, word) => {
		if(acc[word]) {
			return {...acc, [word]: acc[word] + 1};
		}
		return {...acc, [word]: 1}
	}, {})
	

console.log(mutableApproach(inputStr));
console.log(functionalApproach(inputStr));

```
44. isTwin
```js
// check if two string has the characters/letters, could be ordered or unordered
// eg "hello", "world" = false
// "lambs", "balms" = true
// "flow", "wolf" = true
// "cat", "act" = true


const isTwin = (str1, str2) => {
	if(str1.length !== str2.length) {
		return false
	}
	
	const sortStr1 = str1.toLowerCase().split('').sort();
	const sortStr2 = str2.toLowerCase().split('').sort();
	
	return sortStr1.join('') == sortStr2.join('');
}

console.log(isTwin('cat', 'act')) // true

```
45. Multiples of 3 or 5(codewars)
```js
// We want our function to take a number and
// then provide the sum of all the natural numbers below it,
// which are multiples of either 3 or 5.

function solution(number) {
	let sum = 0;
	for (let i = 0; i<number; i++) {
		if(i % 3 == 0 || i % 5 == 0) {
			sum = sum+i;
			continue;
		} else if(i % 5 == 0) {
			sum = sum + i;
			continue;
		} else {
			continue;
		}
	}
	return sum;
}

console.log(solution(100)) // 2318
```
46. fibonacci even number sum
```js
// find the sum of the even-valued terms
function fiboEvenSum(n) {
	let result = [0,1];
	for(let i = 0; i < (n-1); i++) {
		const sum = result[result.length - 1] + result[result.length-2];
		result.push(sum)
	}
	
	const evenSum = result.filter(item => item % 2 == 0).reduce((acc, currentValue) => acc+currentValue)
	return evenSum;
}
console.log(fiboEvenSum(10)) // 44

```
47. Sum all digits within an string
```js
// sum of all digits that occur in a given string.


function sumDigitStrings(digitStr) {
	let digitSum = 0;
	for(let i = 0; i < digitStr.length; i++) {
		if(!isNaN(digitStr[i])) {
			digitSum += Number(digitStr[i]);
		}
	}
	
	return digitSum;
}

console.log(sumDigitStrings('wo123r4l5d')) // 15

```

48. sum of cubes
```js
// return the sum of cubes of all integer from 1 to a given integer

function sumOfCubes(n) {
	let cSums = 0;
	for (let i = 1; i <= n; i++) {
    		cSums += Math.pow(i, 3);
  	}
	return cSums;
}


console.log(sumOfCubes(3)) // 36
```
49. 
```js
// Write a function that returns each number in the
// array if it is larger than all the numbers to the
// right or if it is the last value

const values = [16, 17, 4, 3, 5, 2]; // should return [17, 5, 2]

const result = values.filter((value, idx) =>
  values
    .slice(idx + 1)
    .every(rightValue => value > rightValue)
);

console.log(result);

```
50. 
```js

```
