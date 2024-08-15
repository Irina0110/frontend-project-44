import playGame from '../index.js';
import { getRandomNumberInRange } from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => (
  Array.from({ length }, (_, i) => start + i * step)
);

const generateRound = () => {
  const start = getRandomNumberInRange(1, 10);
  const step = getRandomNumberInRange(1, 10);
  const length = getRandomNumberInRange(5, 10);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomNumberInRange(0, length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => playGame(gameDescription, generateRound);
