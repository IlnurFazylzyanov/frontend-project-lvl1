import readlineSync from 'readline-sync';

const questionAboutTheNameUser = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  return `Hello ${nameUser}!`;
};

export default questionAboutTheNameUser;
