// addition func
const add = (a, b) => {
	return a + b;
}

// substraction func
const substract = (a, b) => {
	return a - b;
}

// multiplication func
const multiply = (a, b) => {
	if (a <= 1) return b;
	if (b <= 1) return a;
	return a * b;
}

// divide func
const divide = (a, b) => {
	if (a === 0) return "ERR";
	if (b === 0) return "ERR";
	return (a / b).toFixed(3);
}

// operate func
const operate = (operator, a, b) => {
	return operator(a, b);
}

// initialize operators and numbers
const operators = document.querySelectorAll("[data-operator]");
const numbers = document.querySelectorAll("[data-number]");

// initialize display for calc
const display = document.querySelector("#calc-display");
// set display textcontent based on input values
const displayNumbers = (e) => {
	const num = e.target.dataset.number;
	display.textContent += `${num}`
}
// for each number btn add onclick displaynumbers func
numbers.forEach(num => num.addEventListener("click", displayNumbers));

// delete last character from display textcontent
const deleteLastDigit = () => { 
	display.textContent = display.textContent.slice(0, -1);
}

// initialize delete buttons
const deleteBtn = document.querySelector("#delete")
// add onclick delete last digit func
deleteBtn.addEventListener("click", deleteLastDigit)

// initialize clear button
const clearBtn = document.querySelector("#clear")
// clear display text content func
const clearDisplay = () => {
	display.textContent = ""
}
// add onclick clear display func
clearBtn.addEventListener("click", clearDisplay)

