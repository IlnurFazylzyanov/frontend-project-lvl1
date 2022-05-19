import { gameLogicFunction, numberRandom } from '../index.js';

const essenceGameCalc = 'What is the result of the expression?';

const getBasicData = () => {
  let resultOperation;
  const firstNumberExpression = numberRandom(0, 100);
  const secondNumberExpression = numberRandom(0, 100);
  const operationRandom = ['+', '-', '*'][numberRandom(0, ['+', '-', '*'].length - 1)];
  const question = `${firstNumberExpression} ${operationRandom} ${secondNumberExpression}`;
  if (operationRandom === '+') {
    resultOperation = firstNumberExpression + secondNumberExpression;
  }
  if (operationRandom === '-') {
    resultOperation = firstNumberExpression - secondNumberExpression;
  }
  if (operationRandom === '*') {
    resultOperation = firstNumberExpression * secondNumberExpression;
  }
  return [question, String(resultOperation)];
};

const startTheGameCalc = () => gameLogicFunction(essenceGameCalc, getBasicData);

export default startTheGameCalc;
