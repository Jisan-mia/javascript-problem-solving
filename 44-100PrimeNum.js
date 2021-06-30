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

function primes(nPrime) {
	const primeNums = [];
	for (let i = 2; i <= nPrime; i++) {
		if (isPrime(i)) {
			primeNums.push(i);
		}
	}
	return primeNums.join(",");
}

console.log(primes(100));
