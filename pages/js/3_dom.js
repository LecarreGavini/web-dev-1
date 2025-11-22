// JavaScript DOM Methods & Event Listeners

document
	.getElementById('button1-1')
	.addEventListener('click', () =>
		console.log('button `log by id using getElementById` has been clicked'),
	)

document
	.querySelector('#button1-2')
	.addEventListener('click', () =>
		console.log('button `log by id using querySelector` has been clicked'),
	)

document
	.querySelector('.button2')
	.addEventListener('click', () =>
		console.log('button `log by class` has been clicked'),
	)

document
	.querySelector('span')
	.addEventListener('click', () =>
		console.log('button `log by element` has been clicked'),
	)

document
	.getElementById('button3')
	.addEventListener('click', () =>
		console.log(document.getElementById('title').innerText),
	)
