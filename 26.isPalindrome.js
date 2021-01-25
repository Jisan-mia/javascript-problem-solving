const string = "13111";
// using build in functions
function isPalindrme(string) {
	return string.split("").reverse().join("") == string;
}

console.log(isPalindrme(string));
