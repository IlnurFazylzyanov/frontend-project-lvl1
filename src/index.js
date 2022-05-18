import readlineSync from 'readline-sync';

export const questionAboutTheNameUser = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

export const numberRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

export const questionAsced = (index) => {
  const question = [
    'Answer "yes" if the number is even, otherwise answer "no".',
    'What is the result of the expression?',
    'Find the greatest common divisor of given numbers.',
    'What number is missing in the progression?',
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  ];
  return question[index];
};

export const variantExpression = (index) => {
  const expression = [
    numberRandom(1, 100),
    ['+', '-', '*'][numberRandom(0, ['+', '-', '*'].length - 1)],
    numberRandom(1, 10),
  ];
  return expression[index];
};

export const answerUser = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
