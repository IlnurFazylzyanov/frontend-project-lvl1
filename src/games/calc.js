import {
  questionAboutTheNameUser,
  questionAsced,
  variantExpression,
  answerUser,
} from '../index.js';

const nameUser = questionAboutTheNameUser();
console.log(questionAsced(1));

const calculateMathTheOperation = (count = 2) => {
  let resultOperation;
  const firstNumberExpression = variantExpression(0);
  const secondNumberExpression = variantExpression(0);
  const operationRandom = variantExpression(1);
  console.log(`Question: ${firstNumberExpression} ${operationRandom} ${secondNumberExpression}`);
  if (operationRandom === '+') {
    resultOperation = firstNumberExpression + secondNumberExpression;
  }
  if (operationRandom === '-') {
    resultOperation = firstNumberExpression - secondNumberExpression;
  }
  if (operationRandom === '*') {
    resultOperation = firstNumberExpression * secondNumberExpression;
  }
  const answer = answerUser();
  if (Number(answer) !== resultOperation) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${resultOperation}".`);
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : calculateMathTheOperation(count - 1);
};

export default calculateMathTheOperation;
