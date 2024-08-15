import playGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, generateRound);
