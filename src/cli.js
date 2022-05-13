import readlineSync from "readline-sync";

const questionAboutTheNameUser = () => {
  const nameUser = readlineSync.question("May I have your name?");
  console.log(`Hello ${nameUser}!`);
};

export default questionAboutTheNameUser;
