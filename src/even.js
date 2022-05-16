import readlineSync from 'readline-sync';

let nameUser = '';
export const questionAboutTheNameUser = () => {
  nameUser = readlineSync.question('May I have your name? ');
  return `Hello ${nameUser}!`;
};

const numberRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

export function answerIsYesOrNo(count = 2) {
  const numberRand = numberRandom(1, 100);
  console.log(`Question: ${numberRand}`);
  const answer = readlineSync.question('Your answer: ');
  if ((numberRand % 2 === 0 && answer !== 'yes') || (numberRand % 2 !== 0 && answer !== 'no')) {
    return `yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${nameUser}!`;
  }
  return count === 0 ? `Congratulations, ${nameUser}! ` : answerIsYesOrNo(count - 1);
}
