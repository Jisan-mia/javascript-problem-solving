function allDigitAvg(num) {
	if (typeof num === "number") {
		const numberString = num.toString();
		let sum = 0;
		for (let i = 0; i < numberString.length; i++) {
			sum += parseInt(numberString[i]);
		}
		return sum / numberString.length;
	} else {
		return "Enter valid input";
	}
}

const number = 12345;
const result = allDigitAvg(number);
console.log(result);
