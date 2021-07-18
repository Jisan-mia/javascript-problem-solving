//  Create a function that will convert a string in an array containing the ASCII codes of each character

function getAsciiCode(str) {
	const arrOfAscii = [];

	for (let i = 0; i < str.length; i++) {
		arrOfAscii.push(str.charCodeAt(i));
	}
	return arrOfAscii;
}

console.log(getAsciiCode("My Name is Jisan"));
