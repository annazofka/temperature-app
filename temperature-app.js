let temp = document.querySelector('#temp')
let result = document.querySelector('#result')

temp.addEventListener('input', () => {
	result.textContent = temp.value
})
