import playGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGCD = (num1, num2) => {
  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2).toString();
  return [question, correctAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => playGame(gameDescription, generateRound);

export default gcdGame;
