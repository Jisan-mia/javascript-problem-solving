function stringLetterCount(string) {
	if (typeof string === "string") {
		const counterObj = {};
		for (let i = 0; i < string.length; i++) {
			console.log(string[i]);
			if (counterObj.string[i]) {
				counterObj.string[i] = counterObj.string[i] + 1;
			} else if (!counterObj.string[i]) {
				counterObj.string[i] = 1;
			}
		}

		// return counterObj;
	} else {
		return "Enter valid input";
	}
}

const result = stringLetterCount("aabbcdd");
console.log(result);
