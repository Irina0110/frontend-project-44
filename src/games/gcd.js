import playGame from '../index.js';
import { getRandomNumberInRange } from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let num1Copy = num1;
  let num2Copy = num2;

  while (num2Copy) {
    const temp = num2Copy;
    num2Copy = num1Copy % num2Copy;
    num1Copy = temp;
  }
  return num1Copy;
};

const generateRound = () => {
  const num1 = getRandomNumberInRange(1, 100);
  const num2 = getRandomNumberInRange(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, generateRound);
