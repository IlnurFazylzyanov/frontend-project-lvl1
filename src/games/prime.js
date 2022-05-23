import gameLogicFunction from '../index.js';
import numberRandom from '../utils.js';

const essenceGamePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getBasicData = () => {
  const collDivisor = [];
  const numberRand = numberRandom(0, 100);
  for (let i = 2; i < numberRand; i += 1) {
    if (numberRand % i === 0) {
      collDivisor.push(i);
    }
  }
  const question = String(numberRand);
  const answerCorrect = collDivisor.length === 0 ? 'yes' : 'no';

  return [question, answerCorrect];
};

const startTheGamePrime = () => gameLogicFunction(essenceGamePrime, getBasicData);

export default startTheGamePrime;
