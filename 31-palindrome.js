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
