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
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const productList = [
	{
		id: 0,
		name: "butter",
		price: 5.67,
		brand: "dairy gold",
		expiry: "2023-04-20"
	},
	{
    id: 1,
    name: "ketchup",
    price: 1.37,
    brand: "mercadona",
    expiry: "2023-05-13"
  },
  {
    id: 2,
    name: "fanta",
    price: 1.89,
    brand: "cocacola",
    expiry: "2023-03-30"
  },
  {
    id: 1,
    name: "mustard",
    price: 1.51,
    brand: "mercadona",
    expiry: "2023-05-13"
  },
  {
    id: 1,
    name: "mayonaise",
    price: 1.72,
    brand: "mercadona",
    expiry: "2023-05-13"
  },
  {
    id: 1,
    name: "curry",
    price: 1.97,
    brand: "mercadona",
    expiry: "2023-05-13"
  }
]

function searchByPID(pid) {
	return productList.filter((product) => product.id === pid);
}

function searchByExpiry(dateStart, dateEnd) {
	dateStart = new Date(dateStart);
	dateEnd = new Date(dateEnd);
	return productList.filter((product) => {
		const productExpiry = new Date(product.expiry);
		return productExpiry <= dateEnd && productExpiry >= dateStart;
	});
}

const arr = [];

setInterval(sortInsert, 2000, () => Math.floor(Math.random() * 1000));

function sortInsert(rng) {
	const nbr = rng();

	arr.push(nbr);
	arr.sort((a, b) => a - b);

	console.log(arr);
}

function searchByBrand(brand) {
	return productList.filter((product) => product.brand === brand);
}

function averagePriceBrand(brand) {
	const products = searchByBrand(brand);
	let averagePrice = 0;
	for (product of products) {
		averagePrice += product.price;
	}
	console.log(averagePrice / products.length);
}

let words = ["hello", "zebra", "test", "ayyy", "whaddup?"];

function sortWords() {
	words.sort();
  console.log(words);
}