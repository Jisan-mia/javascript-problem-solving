// An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false.
// eg. 153, 370, 371, 407, 1634, 8208 etc. are armstrong number
// 153 = 1³ + 5³ + 3³
// 1634 = 1⁴ + 6⁴ + 3⁴ + 4⁴

function isArmstrong(number) {
	const numStr = number.toString();
	const length = numStr.length;
	let sum = 0;

	for (let i = 0; i < length; i++) {
		sum += Math.pow(Number(numStr[i]), length);
	}

	return sum == number;
}
const checkArmstrong = isArmstrong(1634);
console.log(checkArmstrong);
