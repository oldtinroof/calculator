const calculator = {
  display: '0',
  firstValue: null,
  operator: null,
};

calculator.reset = function reset() {
  this.display = '0';
  this.calculation = [];
}

calculator.inputDigit = function inputDigit(value) { 
  if (!this.firstValue && !this.operator) {
    this.display = this.display === '0' ? value : this.display + value;
    return;
  }
  this.display = value;
}

calculator.inputDecimalPoint = function inputDecimalPoint() {
  if (this.display.indexOf('.') !== -1) { return; }
  this.display = this.display + '.';
}

calculator.inputOperator = function inputOperator(operator) {
  this.firstValue = this.display;
  this.operator = operator;
}

calculator.compute = function compute() {
  if (!this.firstValue || !this.operator) { return; }
  this.display = this.operations[this.operator](parseFloat(this.firstValue), parseFloat(this.display)).toString();
  this.operator = null;
  this.firstValue = null;
}

calculator.operations = {
  '+': (a, b) => { return a + b; },
  '-': (a, b) => { return a - b; },
}

module.exports = calculator;