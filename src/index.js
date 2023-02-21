function isPrime(nbr) {
	if (nbr == 0) {
		return false;
	}

	if (nbr == 1) {
		return true;
	}

	for (int i = 1; i < nbr; i++) {
		if (nbr % i == 0) {
			return false;
		}
	}

	return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));