// Write a function that takes a string, and returns the character that is most commonly used in the string.

function getMostUsesChar(str) {
	if (typeof str == "string") {
		let data = {};
		for (let s of str) {
			if (data[s]) {
				data[s] = data[s] + 1;
			} else {
				data[s] = 1;
			}
		}
		return data;
	}
	return;
}

const result = getMostUsesChar("youaregood");
console.log(result);
