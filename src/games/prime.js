import {
    answerUser,
    questionAboutTheNameUser,
    questionAsced,
    variantExpression,
  } from '../index.js';
  
  const nameUser = questionAboutTheNameUser();
  console.log(questionAsced(4));
  
  const ifGivenNumberIsPrime = (count = 2) => {
    let result = [];
    const numberRand = variantExpression(0);
    for (let i = 2; i < numberRand; i += 1) {
      if (numberRand % i === 0) {
        result.push(i)
      }
    }
    console.log(`Question: ${numberRand}`);
    const answer = answerUser();
    if (result.length !== 0 && answer !== 'no' || result.length === 0 && answer !== 'yes' ) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${'no'}".`);
      return `Let's try again, ${nameUser}!`;
    }
    console.log('Correct!');
    return count === 0 ? `Congratulations, ${nameUser}! ` : ifGivenNumberIsPrime(count - 1);
  };
  
  export default ifGivenNumberIsPrime;