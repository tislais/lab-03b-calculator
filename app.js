// import functions and grab DOM elements

//// grab add-input-1 and add-input-2 and add-button IDs

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');


// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    // store user inputs
    const number1 = addInput1.valueAsNumber;
    const number2 = addInput2.valueAsNumber;

    // store sum of inputs
    const result = number1 + number2;

    // change answer div to display sum
    addResult.textContent = result;
});

subtractButton.addEventListener('click', () => {
    // store user inputs
    const number1 = subtractInput1.valueAsNumber;
    const number2 = subtractInput2.valueAsNumber;

    // store sum of inputs
    const result = number1 - number2;

    // change answer div to display sum
    subtractResult.textContent = result;
});

multiplyButton.addEventListener('click', () => {
    // store user inputs
    const number1 = multiplyInput1.valueAsNumber;
    const number2 = multiplyInput2.valueAsNumber;

    // store sum of inputs
    const result = number1 * number2;

    // change answer div to display sum
    multiplyResult.textContent = result;
});

divideButton.addEventListener('click', () => {
    // store user inputs
    const number1 = divideInput1.valueAsNumber;
    const number2 = divideInput2.valueAsNumber;

    // store sum of inputs
    const result = number1 / number2;

    // change answer div to display sum
    divideResult.textContent = result;
});