import readlineSync from 'readline-sync';

export const questionAboutTheNameUser = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello ${nameUser}`);
  return nameUser;
};

export const numberRandom = (min, max) => Math.round(Math.random() * (max - min) + min);