import readlineSync from 'readline-sync';
import { questionAboutTheNameUser, numberRandom } from '../index.js'

const nameUser = questionAboutTheNameUser();

export function answerYesOrNo(count = 2) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numberRand = numberRandom(1, 100);
  console.log(`Question: ${numberRand}`);
  const answer = readlineSync.question('Your answer: ');
  if ((numberRand % 2 === 0 && answer !== 'yes') || (numberRand % 2 !== 0 && answer !== 'no')) {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    return `Let's try again, ${nameUser}!`;
  }
  console.log('Correct!');
  return count === 0 ? `Congratulations, ${nameUser}! ` : answerYesOrNo(count - 1);
}
