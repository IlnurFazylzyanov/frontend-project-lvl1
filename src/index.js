import readlineSync from 'readline-sync';

export const numberRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

const countRound = 3;

export const gameLogicFunction = (essenceGameEven, getBasicData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(essenceGameEven);

  for (let i = 0; i < countRound; i += 1) {
    const [question, answerCorrect] = getBasicData();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answerCorrect) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      return (`Let's try again, ${nameUser}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${nameUser}!`);
};
