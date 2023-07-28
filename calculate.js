const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b === 0 ? "Error: Cannot divide by zero" : a / b),
};
module.exports = calculator;

const chai = require("chai");
const calculator = require("./calculator");
const expect = chai.expect;
describe("Calculator", () => {
    it("should add two numbers correctly", () => {
        expect(calculator.add(2, 3)).to.equal(5);
    });
    it("should subtract two numbers correctly", () => {
        expect(calculator.subtract(5, 3)).to.equal(2);
    });
    it("should multiply two numbers correctly", () => {
        expect(calculator.multiply(2, 3)).to.equal(6);
    });
    it("should divide two numbers correctly", () => {
        expect(calculator.divide(6, 3)).to.equal(2);
    });
    it("should return 'Error: Cannot divide by zero' when dividing by zero", () => {
        expect(calculator.divide(6, 0)).to.equal("Error: Cannot divide by zero");
    });
});