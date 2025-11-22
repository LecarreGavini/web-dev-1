// arrays
const brands = ['dell', 'hp', 'lenovo']

// Loops
//   For
//   While
//   For of

function forLoop() {
	// pattern: for (initialize, condition, increment)
	for (let i = 0; i < brands.length; i++) {
		console.log(`I am ${brands[i]}`)
	}
	// let i = 0
	// for (; i < brands.length; ) {
	// 	// i = i + 1
	// 	// i += 1
	// 	// i++
	// 	console.log(`I am ${brands[i]}`)
	// }
	// for (let i = brands.length - 1; i >= 0; i--) {
	// 	console.log(`I am ${brands[i]}`)
	// }
}

const whileLoop = () => {
	let i = 0
	while (i < brands.length) {
		console.log(`I am ${brands[i]}`)
		i++
	}
}

const forOfLoop = () => {
	// pattern: for (newVariable of array)
	for (const brand of brands) {
		console.log(`I am ${brand}`)
	}
}

const forEachLoop = () => {
	brands.forEach(brand => {
		console.log(`I am ${brand}`)
	})
}

const mapLoop = () => {
	return brands.map(brand => {
		if (brand == 'hp') {
			return `${brand} - 2.0`
		} else if (brand == 'dell') {
			return `${brand} - v2`
		} else {
			return `${brand} - outdated`
		}
	})
}
