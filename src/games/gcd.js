import playGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGCD = (a, b) => {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
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
