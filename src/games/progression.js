import gameLogicFunction from '../index.js';
import numberRandom from '../utils.js';

const essenceGameProgession = 'What number is missing in the progression?';

const getBasicData = () => {
  const collProgressNumber = [];
  let numberRand = numberRandom(0, 100);
  const numberProgress = numberRandom(0, 20);
  const randomIndex = numberRandom(1, 10);

  for (let i = 0; i < 10; i += 1) {
    collProgressNumber.push(numberRand);
    numberRand += numberProgress;
    if (randomIndex === i) {
      collProgressNumber[randomIndex] = '..';
    }
  }
  const question = `${collProgressNumber.join(' ')}`;
  const answerCorrect = collProgressNumber[randomIndex - 1] + numberProgress;

  return [question, String(answerCorrect)];
};

const startTheGameProgression = () => gameLogicFunction(essenceGameProgession, getBasicData);

export default startTheGameProgression;
