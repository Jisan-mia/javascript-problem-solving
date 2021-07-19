// Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function isPrime(num) {
	if (num < 2) {
		return false;
	}
	if (num == 2) {
		return true;
	}

	let maxDivision = Math.sqrt(num);

	for (let i = 2; i <= maxDivision; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

function getPrime(nPrimes, startAt) {
	const arr = [];
	let i = startAt;
	while (arr.length < nPrimes) {
		if (isPrime(i)) {
			arr.push(i);
		}
		i++;
	}
	return arr;
}

console.log(getPrime(20, 2));
