var assert = require('assert');
var calculator = require('../src/calculator.js');

describe('Calculator', () => {
  afterEach(() => {
    calculator.reset();
  });

  it('should have an initial display of 0', () => {
    assert.equal(calculator.display, '0');
  });

  it('should update the display value when a digit is entered', () => {
    calculator.inputDigit('2');
    assert.equal(calculator.display, '2');
  });

  it('should append a digit the display value when another digit is entered', () => {
    calculator.inputDigit('2');
    calculator.inputDigit('3');
    assert.equal(calculator.display, '23');
  });

  it('should append a digit the display value when multiple digits are entered', () => {
    calculator.inputDigit('2');
    calculator.inputDigit('3');
    calculator.inputDigit('4');
    assert.equal(calculator.display, '234');
  });

  it('should append a decimal point in the right place', () => {
    calculator.inputDigit('2');
    calculator.inputDecimalPoint();
    calculator.inputDigit('4');
    assert.equal(calculator.display, '2.4');
  });

  it('should not append a decimal point if one already exists', () => {
    calculator.inputDigit('2');
    calculator.inputDecimalPoint();
    calculator.inputDigit('4');
    calculator.inputDecimalPoint();
    assert.equal(calculator.display, '2.4');
  });

  it('should not update the display when an operator button is pressed', () => {
    calculator.inputDigit('2');
    calculator.inputOperator('+');
    assert.equal(calculator.display, '2');
  });

  it('should perform an addition when add button is pressed', () => {
    calculator.inputDigit('2');
    calculator.inputOperator('+');
    calculator.inputDigit('4');
    calculator.compute();
    assert.equal(calculator.display, '6');
  });

  it('should perform a subtraction when subtract button is pressed', () => {
    calculator.inputDigit('4');
    calculator.inputOperator('-');
    calculator.inputDigit('3');
    calculator.compute();
    assert.equal(calculator.display, '1');
  });
});