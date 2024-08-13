import playGame from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
    return Array.from({ length }, (_, i) => start + i * step);
};

const generateRound = () => {
    const start = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10);
    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';

    const question = progression.join(' ');
    return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => playGame(gameDescription, generateRound);

export default progressionGame;
