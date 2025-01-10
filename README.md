# Unhandled Exception in TypeScript Arithmetic Functions

This repository demonstrates a common error in TypeScript: unhandled exceptions. The `bug.ts` file contains a set of arithmetic functions. The `divide` function throws an error if the denominator is zero, but the main function does not handle this. This will cause the program to crash.

The solution, found in `bugSolution.ts`, demonstrates proper error handling using a `try...catch` block.