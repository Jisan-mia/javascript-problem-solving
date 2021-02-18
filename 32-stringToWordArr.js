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
