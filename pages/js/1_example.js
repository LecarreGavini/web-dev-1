// JavaScript
let name = 'Lecarre Gavini' // mutable (changeable)
const age = 21 // immutable (unchangeable)
// name (is a) string
// age (is a) number
const gwapo = true // is a boolean
const attributes = ['wise', 'good-looking', 'humble'] // is an array
const details = {
	// is an object
	id: '2025USC',
	year: 2025,
	school: 'USC',
}

// operators
//   * +-*/
//   * == >.<
//   * && || !

function calculate(a, b, operator) {
	if (operator == '+') return a + b
	if (operator == '-') return a - b
	if (operator == '*') return a * b
	if (operator == '/') return a / b
	return a + b
}

// functions
function sum(a, b) {
	return a + b
}

function greet() {
	console.log(`Hello! my name is ${name}. I am ${age} years old.`)
}

// functions with parameters
function reply(recipient) {
	console.log(`Nice meeting you, ${recipient}!`)
}

// if statement
function negotiateIfStatements(price) {
	if (price < 100) {
		console.log('Geh!')
	} else if (price == 200) {
		console.log('Ambot!')
	} else {
		console.log('Grabe siya...')
	}
}

// switch statement
function negotiateSwitch(price) {
	switch (price) {
		case 100:
			return 'Cheap!'
		case 200:
			return 'Okay lang!'
		default:
			return 'Mahal'
	}
}

// ternary statement
function negotiateTernary(price) {
	// * ternary operator (condition ? true : false)
	return price < 150 ? 'Bargain!' : 'Too expensive!'
}

const searchStudent = (id, name, age) => {
	const d = {
		id: '123',
		name: 'John',
		age: 30,
	}
	if (id == d.id || name == d.name || age == d.age) {
		return d
	}
	return 'not found'
}

const gender = g => {
	if (g == 'm') return 'male' // = =
	if (g != 'm') return 'female' // ! =
}

// Loops
//   For
//   While
//   For of

function introduce() {
	for (let i = 0; i < attributes.length; i++) {
		console.log(`I am ${attributes[i]}`)
	}
}

// arrays
const brands = ['dell', 'hp', 'lenovo']
