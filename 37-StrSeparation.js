function strSeparation(string) {
	if (typeof string === "string") {
		let capitalLetter = "",
			smallletter = "",
			nums = [],
			symbols = [];
		for (let i = 0; i < string.length; i++) {
			if (/[A-Z]/.test(string[i])) {
				capitalLetter += string[i];
			} else if (/[a-z]/.test(string[i])) {
				smallletter += string[i];
			} else if (/\d/.test(string[i])) {
				nums.push(string[i]);
			} else if (/(?=.*[!@#\$%\^&\*\.])/.test(string[i])) {
				symbols.push(string[i]);
			}
		}

		const allSymbols = symbols.join();
		const allNums = nums.join();
		return [capitalLetter, smallletter, allNums, allSymbols];
	}
}

const result = strSeparation("Hello!, We #Love pYtHoN 2 3.");
result.forEach((item) => {
	console.log(item);
});
