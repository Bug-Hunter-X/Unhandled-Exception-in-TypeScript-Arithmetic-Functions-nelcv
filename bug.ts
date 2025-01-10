function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result = add(5, 3); // result will be 8
console.log(result);

result = subtract(10, 4); // result will be 6
console.log(result);

result = multiply(7, 2); // result will be 14
console.log(result);

result = divide(9, 0); // this will throw an error
console.log(result);