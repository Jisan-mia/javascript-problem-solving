function checkPhoneNum(number) {
	const regex = /(\+88)?-?01[1-9]\d{8}/g;
	if (regex.test(number)) {
		if (/(\+88)?-?018\d{8}/g.test(number)) {
			return "It's robi number";
		} else if (/(\+88)?-?017\d{8}/g.test(number)) {
			return "It's grameen number";
		} else if (/(\+88)?-?019\d{8}/g.test(number)) {
			return "It's banglalink number";
		} else if (/(\+88)?-?016\d{8}/g.test(number)) {
			return "It's airtle number";
		}
		return "There is no operator with this pattern";
	} else {
		return "Number is invalid";
	}
}

const text = "+8801901422927";
// const regex = /(\+88)?-?01[1-9]\d{8}/g;
const result = checkPhoneNum(text);
console.log(result);
