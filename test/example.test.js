// IMPORT MODULES under test here:
// import { example } from '../example.js';

import {
    add,
    subtract,
    multiply,
    divide
} from '../utils.js'

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// Test add function
test('this function should return 10 if I give it 4 and 6', (expect) => {
    const expected = 10;
    const actual = add(4, 6);

    expect.equal(actual, expected);
});

// Test subtract function
test('this function should return 10 if I give it 14 and 4', (expect) => {
    const expected = 10;
    const actual = subtract(14, 4);

    expect.equal(actual, expected);
});

// Test multiply function
test('this function should return 10 if I give it 5 and 2', (expect) => {
    const expected = 10;
    const actual = multiply(5, 2);

    expect.equal(actual, expected);
});

// Test divide function
test('this function should return 10 if I give it 50 and 5', (expect) => {
    const expected = 10;
    const actual = divide(50, 5);

    expect.equal(actual, expected);
});