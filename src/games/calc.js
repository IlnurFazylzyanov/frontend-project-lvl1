import readlineSync from 'readline-sync';
import { questionAboutTheNameUser, numberRandom } from '../index.js';

const nameUser = questionAboutTheNameUser();

const calculateMathTheOperation = (count = 2) => {
  console.log('What is the result of the expression?');
  const firstNumberExpression = numberRandom(0, 20);
  const secondNumberExpression = numberRandom(0, 20);
  const operation = ['+', '-', '*'];
  const operationRandom = operation[numberRandom(0, operation.length)];
  console.log(`Question: ${firstNumberExpression} ${operationRandom} ${secondNumberExpression}`);
  let resultOperation;
  if (operationRandom === '+') {
    resultOperation = firstNumberExpression + secondNumberExpression;
  }
  if (operationRandom === '-') {
    resultOperation = firstNumberExpression - secondNumberExpression;
  }
  if (operationRandom === '*') {
    resultOperation = firstNumberExpression * secondNumberExpression;
  }
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) !== resultOperation) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${resultOperation}".`);
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : calculateMathTheOperation(count - 1);
};

export default calculateMathTheOperation;
