// JavaScript DOM Properties

document.getElementById('prop-1').addEventListener('click', event => {
	const btn = event.target
	if (btn.innerText == 'off') {
		btn.innerText = 'on'
		btn.classList.add('bg-green-500')
		btn.classList.remove('bg-gray-500')
	} else {
		btn.innerText = 'off'
		btn.classList.add('bg-gray-500')
		btn.classList.remove('bg-green-500')
	}
})

document.getElementById('prop-2').addEventListener('click', event => {
	const btn = event.target
	if (btn.innerText == 'Show Students') {
		btn.innerText = 'Hide Students'
		showStudents()
	} else {
		btn.innerText = 'Show Students'
		const studentList = document.getElementById('student-list')
		studentList.innerHTML = ''
	}
})

const showStudents = () => {
	const studentList = document.getElementById('student-list')
	const ul = document.createElement('ul')
	ul.classList.add('list-disc', 'list-inside')
	const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
	for (let i = 0; i < students.length; i++) {
		const li = document.createElement('li')
		li.innerText = students[i]
		ul.appendChild(li)
	}
	studentList.appendChild(ul)
}

document.getElementById('prop-3-btn').addEventListener('click', () => {
	const input = document.getElementById('prop-3-input')
	const error = document.getElementById('prop-3-input-error')
	const value = input.value
	if (value == '') {
		input.classList.add('border-red-500', 'border-2')
		error.innerHTML = 'Invalid'
	} else {
		alert('Submitted!')
	}
})

document.getElementById('prop-3-input').addEventListener('change', e => {
	const input = e.target
	const error = document.getElementById('prop-3-input-error')
	input.classList.remove('border-red-500', 'border-2')
	error.innerHTML = ''
})
