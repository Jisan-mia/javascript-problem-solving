function replaceChar(string) {
	if (typeof string === "string") {
		return string.replace(/a/g, "A");
	} else {
		return "Enter valid input";
	}
}

const text = "My name is Jisan";
const result = replaceChar(text);
console.log(result);
