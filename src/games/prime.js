import { gameLogicFunction, numberRandom } from '../index.js';

const essenceGamePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const parityCheck = (number) => number % 2 === 0;

const getBasicData = () => {
  const collDivisor = [];
  const numberRand = numberRandom(0, 100);
  for (let i = 2; i < numberRand; i += 1) {
    if (parityCheck(numberRand)) {
      collDivisor.push(i);
    }
  }
  const question = String(numberRand);
  const answerCorrect = collDivisor.length === 0 ? 'yes' : 'no';
  return [question, answerCorrect];
};

const startTheGamePrime = () => gameLogicFunction(essenceGamePrime, getBasicData);

export default startTheGamePrime;
