# Math Utils

A simple math utility library providing basic arithmetic operations.

## Description

This is a small and lightweight JavaScript library that offers a set of mathematical functions. It is designed to be easy to use and integrate into any JavaScript project.

## Installation

To use this library in your project, you first need to install the dependencies. From the root directory of the project, run:

```bash
npm install
```

## Usage

You can use the functions provided by this library in your own JavaScript files. Here is an example of how to use the `add`, `subtract`, and `divide` functions:

```javascript
const math = require('./math_utils');

console.log("5 + 3 =", math.add(5, 3)); // Output: 5 + 3 = 8
console.log("5 - 3 =", math.subtract(5, 3)); // Output: 5 - 3 = 2
console.log("10 / 2 =", math.divide(10, 2)); // Output: 10 / 2 = 5

try {
  math.divide(5, 0);
} catch (e) {
  console.error(e.message); // Output: Cannot divide by zero
}
```

The main application file `index.js` also demonstrates how to use the library. You can run it using:

```bash
npm start
```

## Running the Tests

This project uses Jest for testing. To run the test suite, use the following command:

```bash
npm test
```
This will execute all the tests and show the results in the console.
