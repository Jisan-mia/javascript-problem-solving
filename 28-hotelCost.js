// return : what is the total hotel cost of a special hotel that has some rule on pricing
// first 10 day (1-10) price = 100/= per day
// from 11th day to 20th day price = 80/= per day
// from 21th day to any price = 50/= per day

const hotelCost = (stayingDay) => {
	if (typeof stayingDay === "number" && stayingDay > 0) {
		let totalHotelcost = 0;
		if (stayingDay <= 10) {
			totalHotelcost = stayingDay * 100;
		} else if (stayingDay >= 11 && stayingDay <= 20) {
			const firstPartTotal = 10 * 100;
			totalHotelcost = firstPartTotal + (stayingDay - 10) * 80;
		} else if (stayingDay >= 21) {
			const firstPartTotal = 10 * 100;
			const secondPartTotal = 10 * 80;
			totalHotelcost =
				firstPartTotal + secondPartTotal + (stayingDay - 20) * 50;
		}
		return totalHotelcost;
	}
	return "Enter valid input";
};

const result = hotelCost(50);
console.log(result);
