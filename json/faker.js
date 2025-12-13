const first = [
	'Matthew',
	'Mark',
	'Luke',
	'John',
	'Lecarre',
	'Jason',
	'Billy',
	'Sushi',
	'Bobby',
]
const last = [
	'Zamora',
	'Gavini',
	'Sampa',
	'Dill',
	'Argon',
	'Maki',
	'Messi',
	'Alonzo',
]

function rand(max) {
	return Math.floor(Math.random() * max)
}

const names = []

for (let i = 0; i < 100; i++) {
	const _first = first[rand(first.length)]
	const _middle = last[rand(last.length)]
	const _last = last[rand(last.length)]
	names.push({
		id: `USC${(i + 1 + '').padStart(3, '0')}`,
		first: _first,
		middle: _middle,
		last: _last,
		email: `${_first.toLowerCase()}.${_last.toLowerCase()}@usc.edu.ph`,
		age: rand(5) + 17,
	})
}

const namesSearch = {}

for (let i = 0; i < names.length; i++) {
	const _name = names[i]
	namesSearch[_name.id] = _name
}

console.log(JSON.stringify(names))
console.log('\n')
console.log(JSON.stringify(namesSearch))
