const board = document.querySelector('#board')
const SQUARES_NUMBER = 1500
const colors = ['#00ffff', '#b0e0e6', '#afeeee', '#7fffd4', '#40e0d0', '#48d1cc', '#00ced1', '#add8e6', '#87ceeb', '#87cefa', '#00bfff', '#b0c4de', '#4682b4', '#5f9ea0']

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () =>
		setColor(square))

	square.addEventListener('mouseleave', () =>
		removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}