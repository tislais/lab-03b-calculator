import {
    add,
    subtract,
    multiply,
    divide
} from './utils.js';

// Add input
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
// Add output
const addResult = document.getElementById('add-result');

// Subtract input
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
// Subtract output
const subtractResult = document.getElementById('subtract-result');

// Multiply input
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
// Multiply output
const multiplyResult = document.getElementById('multiply-result');

// Divide input
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
// Divide output
const divideResult = document.getElementById('divide-result');


// Click handlers
export function handleAddClick() {
    const number1 = addInput1.valueAsNumber;
    const number2 = addInput2.valueAsNumber;
    const result = add(number1, number2);
    // Do the thing
    addResult.textContent = result;
}

export function handleSubtractClick() {
    const number1 = subtractInput1.valueAsNumber;
    const number2 = subtractInput2.valueAsNumber;
    const result = subtract(number1, number2);
    // Do the thing
    subtractResult.textContent = result;
}

export function handleMultiplyClick() {
    const number1 = multiplyInput1.valueAsNumber;
    const number2 = multiplyInput2.valueAsNumber;
    const result = multiply(number1, number2);
    // Do the thing
    multiplyResult.textContent = result;
}

export function handleDivideClick() {
    const number1 = divideInput1.valueAsNumber;
    const number2 = divideInput2.valueAsNumber;
    const result = divide(number1, number2);
    // Do the thing
    divideResult.textContent = result;
}