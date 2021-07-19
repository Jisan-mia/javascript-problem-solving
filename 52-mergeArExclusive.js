// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function getUniqueOf2arr(arr1, arr2) {
	let uniqueArr = [];

	uniqueArr = [...arr1.filter((num) => !arr2.includes(num))];
	uniqueArr = [...uniqueArr, ...arr2.filter((num) => !arr1.includes(num))];

	return uniqueArr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8, 9, 10];
const result = getUniqueOf2arr(arr1, arr2);
console.log(result);
