import gameLogicFunction from '../index.js';
import numberRandom from '../utils.js';

const essenceGameGcd = 'Find the greatest common divisor of given numbers.';

const getBasicData = () => {
  const collDivisor = [];
  let answerCorrect;
  const firstNumberExpression = numberRandom(0, 100);
  const secondNumberExpression = numberRandom(0, 100);
  const question = `${firstNumberExpression} ${secondNumberExpression}`;
  for (let i = 1; i <= firstNumberExpression; i += 1) {
    if (firstNumberExpression % i === 0) {
      collDivisor.push(i);
    }
  }
  collDivisor.forEach((item) => {
    if (secondNumberExpression % item === 0) {
      answerCorrect = item;
    }
  });

  return [question, String(answerCorrect)];
};

const startTheGameGcd = () => gameLogicFunction(essenceGameGcd, getBasicData);

export default startTheGameGcd;
