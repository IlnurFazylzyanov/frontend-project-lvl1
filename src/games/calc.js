// import readlineSync from 'readline-sync';
import { questionAboutTheNameUser } from '../index.js';

const nameUser = questionAboutTheNameUser();

const calculateMathTheOperation = () => {
  console.log('What is the result of the expression?');
  console.log(nameUser);
};

export default calculateMathTheOperation;
