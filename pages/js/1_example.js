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

// functions
function greet() {
	console.log(`Hello! my name is ${name}. I am ${age} years old.`)
}

// functions with parameters
function reply(recipient) {
	console.log(`Nice meeting you, ${recipient}!`)
}

// conditions
function negotiate(price) {
	if (price < 100) {
		console.log('Geh!')
	} else {
		console.log('Grabe siya...')
	}
}

// loops
function introduce() {
	for (let i = 0; i < attributes.length; i++) {
		console.log(`I am ${attributes[i]}`)
	}
}
