// operate func
const operate = (operator, a, b) => {
	if (operator === undefined) return;
	switch (operator) {
		case "add":
			return a + b;
			break;
		case "substract":
			return a - b;
			break;
		case "multiply":
			return a * b;
			break;
		case "divide":
			return a / b;
			break;
	}
}

// initialize operators and numbers
const operators = document.querySelectorAll("[data-operator]");
const numbers = document.querySelectorAll("[data-number]");

// initialize display for calc
const displayOperand = document.querySelector("#calc-display");
// set display textcontent based on input values
const displayNumbers = (e) => {
	const num = e.target.dataset.number;
	displayOperand.textContent += `${num}`;
}
// for each number btn add onclick displaynumbers func
numbers.forEach(num => num.addEventListener("click", displayNumbers));

// delete last character from display textcontent
const deleteLastDigit = () => { 
	displayOperand.textContent = displayOperand.textContent.slice(0, -1);
}

// initialize result display
const displayResult = document.querySelector("#calc-result");
// initialize operands, operator and result
let firstOperand = 0;
let secondOperand = 0;
let selectedOperator = "";
let prevOperator = ""
let result = 0;
const onOperate = (e) => {
	// if nothing is inputted
	if (displayOperand.textContent.length === 0) return;
	console.log("first log, before storing",selectedOperator)
	if (selectedOperator === "equals") {
		result = operate(prevOperator, firstOperand, secondOperand);
		displayResult.textContent = `${result}`;
		displayOperand.textContent = "";
		firstOperand = result;
		secondOperand = 0;
		return;
	}
	// select operator
	selectedOperator = e.target.dataset.operator;
	prevOperator = e.target.dataset.operator;
	console.log("second log, after storing",selectedOperator)
	// if first operand = 0, store the value
	if (firstOperand === 0) {
		firstOperand = parseInt(displayOperand.textContent);
		displayResult.textContent = firstOperand;
		displayOperand.textContent = "";
		return;
	}
	// if second operand = 0, store the value
	if (secondOperand === 0) {
		secondOperand = parseInt(displayOperand.textContent);
	}
	// calculate based on selected operator, 
	switch (selectedOperator) {
		case "add":
			result = operate(selectedOperator, firstOperand, secondOperand);
			displayResult.textContent = `${result}`;
			displayOperand.textContent = ""
			firstOperand = result;
			secondOperand = 0;
			break;
		case "substract":
			result = operate(selectedOperator, firstOperand, secondOperand);
			displayResult.textContent = `${result}`;
			displayOperand.textContent = ""
			firstOperand = result;
			secondOperand = 0;
			break;
		case "multiply":
			result = operate(selectedOperator, firstOperand, secondOperand);
			displayResult.textContent = `${result}`;
			displayOperand.textContent = ""
			firstOperand = result;
			secondOperand = 0;
			break;
		case "divide":
			result = operate(selectedOperator, firstOperand, secondOperand)
			displayResult.textContent = `${result}`;
			displayOperand.textContent = "";
			firstOperand = result;
			secondOperand = 0;
			break;
	}
	
}
operators.forEach(operator => operator.addEventListener("click", onOperate));

// initialize delete buttons
const deleteBtn = document.querySelector("#delete");
// add onclick delete last digit func
deleteBtn.addEventListener("click", deleteLastDigit);

// initialize clear button
const clearBtn = document.querySelector("#clear");
// clear display text content func
const clearDisplay = () => {
	displayOperand.textContent = "";
	displayResult.textContent = "";
	selectedOperator = "";
	firstOperand = 0;
	secondOperand = 0;
	result = 0;
}
// add onclick clear display func
clearBtn.addEventListener("click", clearDisplay);
