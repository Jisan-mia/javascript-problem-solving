// kilometer to meter

const kiloToMeter = (kilo) => {
	if (typeof kilo === "number") {
		return kilo * 1000;
	}

	return "Enter valid input";
};
const result = kiloToMeter(5);

// budgetCalculator which takes the number of watches, mobiles and laptops as input
// it will return the total price
// 1 watch price 50
// 1 mobile price 100
// 1 laptop price 500

const budgetCalculator = (
	watchQuantity = 0,
	moblieQuantity = 0,
	laptopQuantity = 0
) => {
	if (
		typeof watchQuantity === "number" &&
		typeof moblieQuantity === "number" &&
		typeof laptopQuantity === "number"
	) {
		const total =
			watchQuantity * 50 + moblieQuantity * 100 + laptopQuantity * 500;
		return total;
	}
	return "Enter valid input";
};

const result1 = budgetCalculator(2, 1, 1);
// console.log(result1);

// mega friend
// return the friend name who has the largest spellings from an array of friends name

const megaFriend = (friendsArray) => {
	let largestFriend = friendsArray[0];
	for (let i = 0; i < friendsArray.length; i++) {
		if (friendsArray[i].length > largestFriend.length) {
			largestFriend = friendsArray[i];
		}
	}
	return largestFriend;
};

const friendsArray = ["Jisan", "Shawon", "Mursalin", "Shakil", "Porag", "Toem"];
const largestFriend = megaFriend(friendsArray);
console.log(largestFriend);
