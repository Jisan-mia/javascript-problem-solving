// These are the conditions for a leap year :
// The year is evenly divisible by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

// if year is divisible by 400 then is_leap_year
// else if year is divisible by 100 then not_leap_year
// else if year is divisible by 4 then is_leap_year
// else not_leap_year

function checkLeapYear(year) {
	if (typeof year === "number") {
		if (year % 4 === 0) {
			if (year % 100 === 0) {
				if (year % 400 === 0) {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		}
		return false;
	}
	return "Enter valid year";
}

const result = checkLeapYear(1500);
console.log(result);
