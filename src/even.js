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
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : answerIsYesOrNo(count - 1);
}
