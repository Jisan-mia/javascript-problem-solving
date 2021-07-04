// sum of all the items in an array
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, currentValue) => acc + currentValue);
console.log(sum);

// remove duplicate from an array
const arrWithDuplicates = [3, 4, 1, 6, 23, 4, 3, 8, 1];
const uniqueArr = arrWithDuplicates.reduce((acc, currentValue) => {
	if (acc.indexOf(currentValue) === -1) {
		acc.push(currentValue);
	}
	return acc;
}, []);
console.log(uniqueArr);
