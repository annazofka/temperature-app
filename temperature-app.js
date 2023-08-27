let temp = document.querySelector('#temp')
let result = document.querySelector('#result')
let toggles = document.querySelectorAll('[name="units"]')

temp.addEventListener('input', () => {
	let units = 'celsius'
	for (let toggle of toggles) {
		if (toggle.checked) {
			units = toggle.value
		}
	}

	let converted
	if (units === 'celsius') {
		converted = ((parseFloat(temp.value) - 32) * 5) / 9
	} else {
		converted = (parseFloat(temp.value) * 9) / 5 + 32
	}

	if (temp.value === '') {
		converted = 0
	}

	result.textContent = `${converted.toFixed(1)} degrees ${units}`
})
