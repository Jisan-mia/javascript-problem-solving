const MORSE_CODE = {
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	"-.-.--": "!",
	".-.-.-": ".",
	"--..--": ",",
};

const decodeMorse = function (morseCode) {
	const words = morseCode.split("   ");
	const letters = words.map((word) => word.split(" "));

	let decode = [];

	for (let x = 0; x < letters.length; x++) {
		decode[x] = [];
		for (let y = 0; y < letters[x].length; y++) {
			if (MORSE_CODE[letters[x][y]]) {
				decode[x].push(MORSE_CODE[letters[x][y]]);
			}
		}
	}

	return decode.map((word) => word.join("")).join(" ");
};

//solution 2
const decodeMorseV2 = (morseCode) => {
	return morseCode
		.split("   ")
		.map((word) =>
			word
				.split(" ")
				.map((char) => MORSE_CODE[char])
				.join("")
		)
		.join(" ");
};

const result = decodeMorse(".... . -.--   .--- ..- -.. .");
console.log(result);
