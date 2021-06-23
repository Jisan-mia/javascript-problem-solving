function getMaxSubSum(array) {
	let maxSubSum = 0;
	for (let i = 0; i < array.length; i++) {
		let sumFixedStart = 0;
		for (let j = i; j < array.length; j++) {
			sumFixedStart += array[j];
			maxSubSum = Math.max(maxSubSum, sumFixedStart);
		}
	}
	return maxSubSum;
}

const result = getMaxSubSum([-1, 2, 3, -9, 11]);
// console.log(result);

// optimzed solution in O(n)
function getMaxSubSum2(array) {
	let maxSum = 0;
	let partialSum = 0;
	for (let item of array) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if (partialSum < 0) partialSum = 0;
	}
	return maxSum;
}
const result1 = getMaxSubSum2([-1, 2, 3, -9]);
// console.log(result1);

// solution 3
function sol3(arr) {
	let subSum = [];
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		for (let j = i; j < arr.length; j++) {
			sum += arr[j];
			subSum.push(sum);
		}
	}
	return Math.max(...subSum);
}
console.log(sol3([-1, 2, 3, -9]));
