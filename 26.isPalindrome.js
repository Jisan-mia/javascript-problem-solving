const string = "level";
// using built in functions
function isPalindrme1(string) {
	return string.split("").reverse().join("") == string;
}

// console.log(isPalindrme(string));

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

if (isPalindrome2(string) == true) {
	console.log("Palindrome");
}
