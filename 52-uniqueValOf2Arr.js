// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function getUniqueOf2arr(arr1, arr2) {
	const uniqueArr = [];

	for (let i = 0; i < arr1.length; i++) {
		if (!arr2.includes(arr[i])) {
			uniqueArr.push(arr1[i]);
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		if (!arr1.includes(arr2[i])) {
			uniqueArr.push(arr2[i]);
		}
	}
	return uniqueArr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8, 9, 10];
const result = getUniqueOf2arr(arr1, arr2);
console.log(result);
