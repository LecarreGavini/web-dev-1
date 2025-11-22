// JavaScript DOM Properties
{
	document.getElementById('prop-1').addEventListener('click', () => {
		const prop1 = document.getElementById('prop-1')
		if (prop1.innerText == 'off') {
			prop1.innerText = 'on'
			prop1.classList.add('bg-green-500')
			prop1.classList.remove('bg-gray-500')
		} else {
			prop1.innerText = 'off'
			prop1.classList.add('bg-gray-500')
			prop1.classList.remove('bg-green-500')
		}
	})

	document.getElementById('prop-2').addEventListener('click', () => {
		const prop2 = document.getElementById('prop-2')
		if (prop2.innerText == 'Show Students') {
			prop2.innerText = 'Hide Students'
			showStudents()
		} else {
			prop2.innerText = 'Show Students'
			const studentList = document.getElementById('student-list')
			studentList.innerHTML = ''
		}
	})

	const showStudents = () => {
		const studentList = document.getElementById('student-list')
		const ul = document.createElement('ul')
		ul.classList.add('list-disc', 'list-inside')
		const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
		students.forEach(student => {
			const li = document.createElement('li')
			li.innerText = student
			ul.appendChild(li)
		})
		studentList.appendChild(ul)
	}
}
