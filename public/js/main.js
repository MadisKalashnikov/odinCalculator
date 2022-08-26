const add = (a, b) => {
	return a + b
}

const substract = (a, b) => {
	return a - b
}

const multiply = (a, b) => {
	if (a <= 1) return b
	if (b <= 1) return a
	return a * b
}

const divide = (a, b) => {
	if (a === 0) return "ERR"
	if (b === 0) return "ERR"
	return (a / b).toFixed(3)
}

const operate = (operator, a, b) => {
	return operator(a, b)
}

const operators = document.querySelectorAll("[data-operator]")
const numbers = document.querySelectorAll("[data-number]")
console.log(operators, numbers)

