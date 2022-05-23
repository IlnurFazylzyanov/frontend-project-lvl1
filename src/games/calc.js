import gameLogicFunction from '../index.js';
import numberRandom from '../utils.js';

const essenceGameCalc = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const resultOperation = (num1, num2, operator) => {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  }
  if (operator === '-') {
    result = num1 - num2;
  }
  if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const getBasicData = () => {
  const firstNumber = numberRandom(0, 100);
  const secondNumber = numberRandom(0, 100);
  const operator = operators[numberRandom(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answerCorrect = String(resultOperation(firstNumber, secondNumber, operator));

  return [question, answerCorrect];
};

const startTheGameCalc = () => gameLogicFunction(essenceGameCalc, getBasicData);

export default startTheGameCalc;
