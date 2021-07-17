// Given an array of objects, sort the objects by population size. Return the entire object.

function sortObj(arrOfObj) {
	return arrOfObj.sort((a, b) => b.population - a.population);
}
const arrObj = [
	{ country: "bd", population: 20 },
	{ country: "ca", population: 10 },
	{ country: "la", population: 6 },
	{ country: "ma", population: 100 },
];
console.log(sortObj(arrObj));
