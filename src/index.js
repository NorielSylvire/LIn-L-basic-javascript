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

function arrCompare(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

function randomNbrRange(min, max) {
	return Math.random() % (max - min + 1) + min;
}