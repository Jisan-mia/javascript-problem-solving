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
