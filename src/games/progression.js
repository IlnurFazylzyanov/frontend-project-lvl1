import { gameLogicFunction, numberRandom } from '../index.js';

const essenceGameProgession = 'What number is missing in the progression?';

const getBasicData = () => {
  const collProgessNumber = [];
  let numberRand = numberRandom(0, 100);
  const numberProgress = numberRandom(0, 20);
  for (let i = 0; i < 10; i += 1) {
    collProgessNumber.push(numberRand);
    numberRand += numberProgress;
  }
  const randomIndex = numberRandom(1, collProgessNumber.length - 1);
  collProgessNumber.map((item, i) => {
    const collWithMissingNumber = randomIndex === i ? collProgessNumber[i] = '..' : item;
    return collWithMissingNumber;
  });
  const question = `${collProgessNumber.join(' ')}`;
  const answerCorrect = collProgessNumber[randomIndex - 1] + numberProgress;
  return [question, String(answerCorrect)];
};

const startTheGameProgression = () => gameLogicFunction(essenceGameProgession, getBasicData);

export default startTheGameProgression;
