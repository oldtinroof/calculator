const calculator = require('./calculator.js');

const updateDisplay = (value) => {
  const displayPanel = document.querySelector('.display');
  displayPanel.innerHTML = value;
};

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', ({ target }) => {
  if (!target.matches('button')) { return; }

  const dataType = target.dataset.type;

  switch (dataType) {
    case "digit":
      calculator.inputDigit(target.value);
      break;
    case "dot":
      calculator.inputDecimalPoint();
      break;
    case "all-clear":
      calculator.reset();
      break;
    case "operator":
      calculator.inputOperator(target.value);
      break;
    case "equals":
      calculator.compute();
      break;
    default:
      break;
  }
  
  updateDisplay(calculator.display);
});