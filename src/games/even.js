import {
  answerUser,
  questionAboutTheNameUser,
  questionAsced,
  variantExpression,
} from '../index.js';

const nameUser = questionAboutTheNameUser();

console.log(questionAsced(0));

const answerYesOrNo = (count = 2) => {
  const numberRand = variantExpression(0);
  console.log(`Question: ${numberRand}`);
  const answer = answerUser();
  if ((numberRand % 2 === 0 && answer !== 'yes') || (numberRand % 2 !== 0 && answer !== 'no')) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : answerYesOrNo(count - 1);
};

export default answerYesOrNo;
