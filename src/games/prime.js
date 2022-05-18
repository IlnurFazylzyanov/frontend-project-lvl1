import {
  answerUser,
  questionAboutTheNameUser,
  questionAsced,
  variantExpression,
} from '../index.js';

const nameUser = questionAboutTheNameUser();
console.log(questionAsced(4));

const ifGivenNumberIsPrime = (count = 2) => {
  const collDivisor = [];
  const numberRand = variantExpression(0);
  for (let i = 2; i < numberRand; i += 1) {
    if (numberRand % i === 0) {
      collDivisor.push(i);
    }
  }
  console.log(`Question: ${numberRand}`);
  const answer = answerUser();
  if ((collDivisor.length !== 0 && answer !== 'no') || (collDivisor.length === 0 && answer !== 'yes')) {
    const modifiedAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${modifiedAnswer}".`);
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : ifGivenNumberIsPrime(count - 1);
};

export default ifGivenNumberIsPrime;
