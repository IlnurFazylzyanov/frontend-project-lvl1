import {
  answerUser,
  questionAboutTheNameUser,
  questionAsced,
  variantExpression,
  numberRandom,
} from '../index.js';

const nameUser = questionAboutTheNameUser();
console.log(questionAsced(3));

const findTheMissingProgressionNumber = (count = 2) => {
  const collProgessNumber = [];
  let numberRand = variantExpression(0);
  const numberProgress = variantExpression(2);
  for (let i = 0; i < 10; i += 1) {
    collProgessNumber.push(numberRand);
    numberRand += numberProgress;
  }
  const randomIndex = numberRandom(1, collProgessNumber.length - 1);
  collProgessNumber.map((item, i) => {
    const collWithMissingNumber = randomIndex === i ? collProgessNumber[i] = '..' : item;
    return collWithMissingNumber;
  });
  console.log(`Question: ${collProgessNumber.join(' ')}`);
  const answer = answerUser();
  const result = collProgessNumber[randomIndex - 1] + numberProgress;
  if (result !== Number(answer)) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : findTheMissingProgressionNumber(count - 1);
};

export default findTheMissingProgressionNumber;
