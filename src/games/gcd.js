import {
  answerUser,
  questionAboutTheNameUser,
  questionAsced,
  variantExpression,
} from '../index.js';

const nameUser = questionAboutTheNameUser();
console.log(questionAsced(2));

const findTheGreatestCommonDivisor = (count = 2) => {
  const collDivisor = [];
  let result;
  const firstNumberExpression = variantExpression(0);
  const secondNumberExpression = variantExpression(0);
  console.log(`Question: ${firstNumberExpression} ${secondNumberExpression}`);
  const answer = answerUser();
  for (let i = 1; i <= firstNumberExpression; i += 1) {
    if (firstNumberExpression % i === 0) {
      collDivisor.push(i);
    }
  }
  collDivisor.forEach((item) => {
    if (secondNumberExpression % item === 0) {
      result = item;
    }
  });
  if (result !== Number(answer)) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : findTheGreatestCommonDivisor(count - 1);
};

export default findTheGreatestCommonDivisor;
