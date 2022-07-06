import gameLogic from '../index.js';
import numberRandom from '../utils.js';

const essenceGameEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityCheck = (number) => number % 2 === 0;

const getRoundData = () => {
  const numberRand = numberRandom(0, 100);
  const question = String(numberRand);
  const answerCorrect = parityCheck(numberRand) ? 'yes' : 'no';

  return [question, answerCorrect];
};

const startTheGameEven = () => gameLogic(essenceGameEven, getRoundData);

export default startTheGameEven;
