import { gameLogicFunction, numberRandom } from '../index.js';

const essenceGameEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityCheck = (number) => number % 2 === 0;

const getBasicData = () => {
  const numberRand = numberRandom(0, 100);
  const question = String(numberRand);
  const answerCorrect = parityCheck(numberRand) ? 'yes' : 'no';
  return [question, answerCorrect];
};

const startTheGameEven = () => gameLogicFunction(essenceGameEven, getBasicData, 2);

export default startTheGameEven;
