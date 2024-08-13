import playGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = () => playGame(gameDescription, generateRound);

export default checkEven;
