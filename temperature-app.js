let temp = document.querySelector('#temp')
let result = document.querySelector('#result')

temp.addEventListener('input', () => {
	let celcius = ((parseFloat(temp.value) - 32) * 5) / 9
	result.textContent = `${celcius.toFixed(1)} degrees Celcius`
})
