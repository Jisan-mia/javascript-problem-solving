// Write a function that takes a string, and returns the character that is most commonly used in the string.

function getMostUsesChar(str) {
	if (typeof str == "string") {
		let data = {};
		for (let i = 0; i < str.length; i++) {
			if (data[str[i]]) {
			} else {
				data[str[i]] = 1;
			}
		}
		return data;
	}
	return;
}

const result = getMostUsesChar("youaregood");
console.log(result);
