// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// anagram: An anagram is another word or phrase formed by rearranging letters of the first word or phrase. eg.
// Tar = Rat,
// Night = Thing
// Arc = Car
// Elbow = Below
// State = Taste

function isAnagram(str1, str2) {
	if (str1.length != str2.length) {
		return false;
	}
	let sort1 = str1.toLowerCase().split("").sort();
	let sort2 = str2.toLowerCase().split("").sort();

	return sort1.join("") == sort2.join("");
}

const result = isAnagram("Tar", "Rat");
console.log(result);
